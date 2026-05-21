export type ListingCategory = 'logement' | 'auto' | 'service';

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Profile {
  id: string;
  full_name: string | null;
  phone: string | null;
  avatar_url: string | null;
  is_host: boolean;
  created_at: string;
}

export interface Listing {
  id: string;
  host_id: string;
  category: ListingCategory;
  title: string;
  description: string | null;
  price_per_night: number;
  currency: string;
  city: string;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  photos: string[];
  amenities: string[];
  max_guests: number;
  is_active: boolean;
  created_at: string;
  host?: Profile;
  reviews?: Review[];
  average_rating?: number;
  review_count?: number;
}

export interface Booking {
  id: string;
  listing_id: string;
  guest_id: string;
  check_in: string;
  check_out: string;
  total_amount: number;
  currency: string;
  status: BookingStatus;
  guest_count: number;
  message: string | null;
  created_at: string;
  listing?: Listing;
  guest?: Profile;
}

export interface Review {
  id: string;
  booking_id: string;
  reviewer_id: string;
  listing_id: string;
  rating: number;
  comment: string | null;
  created_at: string;
  reviewer?: Profile;
}

export interface FilterState {
  category: ListingCategory | null;
  minPrice: number | null;
  maxPrice: number | null;
  city: string | null;
  checkIn: string | null;
  checkOut: string | null;
  guests: number;
}

export interface BookingDraft {
  listingId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message: string;
}

export interface CategoryItem {
  id: ListingCategory | 'all';
  label: string;
  icon: string;
}
