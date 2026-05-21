-- ============================================================
-- Les Meubles — Schéma initial
-- ============================================================

-- profiles (étend auth.users)
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  phone text,
  avatar_url text,
  is_host boolean default false,
  created_at timestamptz default now()
);
alter table public.profiles enable row level security;
create policy "Profiles visibles par tous" on public.profiles for select using (true);
create policy "Utilisateur modifie son profil" on public.profiles for update using (auth.uid() = id);

-- catégories
create type listing_category as enum ('logement', 'auto', 'service');

-- listings
create table public.listings (
  id uuid default gen_random_uuid() primary key,
  host_id uuid references public.profiles(id) on delete cascade not null,
  category listing_category not null,
  title text not null,
  description text,
  price_per_night numeric(10,2) not null,
  currency text default 'XAF',
  city text not null,
  address text,
  latitude numeric(9,6),
  longitude numeric(9,6),
  photos text[] default '{}',
  amenities text[] default '{}',
  max_guests int default 1,
  is_active boolean default true,
  created_at timestamptz default now()
);
alter table public.listings enable row level security;
create policy "Annonces actives visibles par tous" on public.listings for select using (is_active = true);
create policy "Hôte gère ses annonces" on public.listings for all using (auth.uid() = host_id);

-- bookings
create table public.bookings (
  id uuid default gen_random_uuid() primary key,
  listing_id uuid references public.listings(id) on delete cascade not null,
  guest_id uuid references public.profiles(id) on delete cascade not null,
  check_in date not null,
  check_out date not null,
  total_amount numeric(10,2) not null,
  currency text default 'XAF',
  status text default 'pending' check (status in ('pending','confirmed','cancelled','completed')),
  guest_count int default 1,
  message text,
  created_at timestamptz default now()
);
alter table public.bookings enable row level security;
create policy "Invité voit ses réservations" on public.bookings for select using (auth.uid() = guest_id);
create policy "Invité crée une réservation" on public.bookings for insert with check (auth.uid() = guest_id);
create policy "Invité annule sa réservation" on public.bookings for update using (auth.uid() = guest_id);
create policy "Hôte voit les réservations de ses annonces" on public.bookings
  for select using (
    auth.uid() in (select host_id from public.listings where id = listing_id)
  );

-- reviews
create table public.reviews (
  id uuid default gen_random_uuid() primary key,
  booking_id uuid references public.bookings(id) on delete cascade unique,
  reviewer_id uuid references public.profiles(id) on delete cascade,
  listing_id uuid references public.listings(id) on delete cascade,
  rating int check (rating between 1 and 5),
  comment text,
  created_at timestamptz default now()
);
alter table public.reviews enable row level security;
create policy "Avis visibles par tous" on public.reviews for select using (true);
create policy "Auteur gère son avis" on public.reviews for insert with check (auth.uid() = reviewer_id);

-- trigger : créer profil automatiquement à l'inscription
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- index pour les performances
create index listings_category_idx on public.listings(category);
create index listings_city_idx on public.listings(city);
create index listings_host_idx on public.listings(host_id);
create index bookings_guest_idx on public.bookings(guest_id);
create index bookings_listing_idx on public.bookings(listing_id);
create index reviews_listing_idx on public.reviews(listing_id);
