-- ============================================================
-- Les Meubles — Données de démonstration
-- 5 annonces fictives avec de vraies coordonnées camerounaises
-- ============================================================
-- IMPORTANT : À exécuter après avoir créé manuellement un profil hôte
-- via l'interface Supabase Auth, puis remplacez HOST_UUID ci-dessous
-- par le vrai UUID du profil.
--
-- Pour tester rapidement, créez un compte via l'app, puis récupérez
-- l'UUID depuis la table profiles et remplacez HOST_UUID.
-- ============================================================

-- Mettre à jour le profil hôte de démonstration (adaptez l'UUID)
-- UPDATE public.profiles SET is_host = true, full_name = 'Marie Ngo', phone = '+237 655 000 001'
-- WHERE id = 'HOST_UUID';

-- Pour les seeds, on utilise une fonction qui insère avec un host fictif
-- En production, créez d'abord l'utilisateur via Supabase Auth puis lancez ce seed

DO $$
DECLARE
  host_id uuid;
BEGIN
  -- Créer un profil hôte fictif directement (bypass auth pour le seed)
  host_id := gen_random_uuid();

  INSERT INTO public.profiles (id, full_name, phone, is_host, created_at)
  VALUES (
    host_id,
    'Marie Ngo',
    '+237 655 100 200',
    true,
    now() - interval '6 months'
  )
  ON CONFLICT (id) DO NOTHING;

  -- ============================================================
  -- LOGEMENT 1 — Appartement meublé à Douala (Bonanjo)
  -- ============================================================
  INSERT INTO public.listings (
    host_id, category, title, description,
    price_per_night, currency, city, address,
    latitude, longitude, photos, amenities, max_guests, is_active
  ) VALUES (
    host_id,
    'logement',
    'Appartement moderne au cœur de Bonanjo',
    'Bel appartement entièrement meublé de 2 chambres situé dans le quartier d''affaires de Bonanjo, à Douala. Vue imprenable sur le Wouri. Idéal pour les voyageurs d''affaires et les touristes. Accès facile aux banques, restaurants et musées. Connexion Wi-Fi haut débit, climatisation dans toutes les pièces, cuisine fully équipée.',
    75000, 'XAF',
    'Douala', 'Bonanjo, Rue de la Chambre de Commerce',
    4.049800, 9.699600,
    ARRAY[
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80'
    ],
    ARRAY['wifi', 'climatisation', 'cuisine', 'parking', 'securite'],
    4,
    true
  );

  -- ============================================================
  -- LOGEMENT 2 — Villa à Yaoundé (Bastos)
  -- ============================================================
  INSERT INTO public.listings (
    host_id, category, title, description,
    price_per_night, currency, city, address,
    latitude, longitude, photos, amenities, max_guests, is_active
  ) VALUES (
    host_id,
    'logement',
    'Villa standing avec piscine à Bastos',
    'Magnifique villa de 3 chambres dans le quartier diplomatique de Bastos, à Yaoundé. Piscine privée, jardin tropical, salle de sport. Personnel de maison disponible sur demande. À 10 minutes du Palais des Congrès et de la BEAC. Parfaite pour familles et séjours longue durée. Sécurité 24h/24.',
    150000, 'XAF',
    'Yaoundé', 'Quartier Bastos, Avenue des Diplomates',
    3.884500, 11.516700,
    ARRAY[
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'
    ],
    ARRAY['wifi', 'piscine', 'climatisation', 'cuisine', 'parking', 'securite', 'lave_linge'],
    8,
    true
  );

  -- ============================================================
  -- AUTO 1 — Toyota Hilux à Douala
  -- ============================================================
  INSERT INTO public.listings (
    host_id, category, title, description,
    price_per_night, currency, city, address,
    latitude, longitude, photos, amenities, max_guests, is_active
  ) VALUES (
    host_id,
    'auto',
    'Toyota Hilux Double Cabine 4x4 — Douala',
    'Toyota Hilux 2022 en excellent état, idéale pour les routes camerounaises. 4x4 permanent pour affronter toutes les pistes. Climatisée, GPS intégré. Kilométrage illimité dans le Grand Douala. Option chauffeur disponible (+15 000 FCFA/jour). Carburant non inclus. Livraison à l''aéroport de Douala sur demande.',
    35000, 'XAF',
    'Douala', 'Akwa, Avenue de la Liberté',
    4.054000, 9.712000,
    ARRAY[
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    ],
    ARRAY['gps', 'climatisation', 'chauffeur'],
    5,
    true
  );

  -- ============================================================
  -- AUTO 2 — Mercedes Classe E à Yaoundé
  -- ============================================================
  INSERT INTO public.listings (
    host_id, category, title, description,
    price_per_night, currency, city, address,
    latitude, longitude, photos, amenities, max_guests, is_active
  ) VALUES (
    host_id,
    'auto',
    'Mercedes Classe E avec chauffeur — Yaoundé',
    'Mercedes Classe E 2021 avec chauffeur professionnel anglophone et francophone. Idéale pour vos déplacements professionnels et événements officiels à Yaoundé. Disponible 7j/7, 24h/24 sur réservation. Transferts aéroport, hôtels, institutions. Véhicule climatisé, eau et journaux fournis. Assurance tous risques incluse.',
    55000, 'XAF',
    'Yaoundé', 'Centre-ville, Avenue Kennedy',
    3.866700, 11.516900,
    ARRAY[
      'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80'
    ],
    ARRAY['chauffeur', 'climatisation', 'gps'],
    3,
    true
  );

  -- ============================================================
  -- SERVICE — Traiteur événementiel à Douala
  -- ============================================================
  INSERT INTO public.listings (
    host_id, category, title, description,
    price_per_night, currency, city, address,
    latitude, longitude, photos, amenities, max_guests, is_active
  ) VALUES (
    host_id,
    'service',
    'Chef traiteur — Cuisine camerounaise traditionnelle',
    'Chef cuisinier professionnel avec 15 ans d''expérience dans la gastronomie camerounaise. Spécialités : Ndolé, Eru, Koki, Mbongo, Poisson braisé. Prestation à domicile ou en salle. Service complet : préparation, service, nettoyage. Devis gratuit pour mariages, baptêmes, anniversaires et réceptions d''entreprise. Basé à Douala, déplacement jusqu''à 50 km inclus.',
    25000, 'XAF',
    'Douala', 'Makepe, Quartier Missoke',
    4.072000, 9.743000,
    ARRAY[
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80'
    ],
    ARRAY['petit_dejeuner'],
    50,
    true
  );

  -- ============================================================
  -- Avis fictifs pour les annonces
  -- (nécessite des reservations existantes — à adapter en prod)
  -- ============================================================
  RAISE NOTICE 'Seed terminé avec succès. Host ID: %', host_id;
END $$;
