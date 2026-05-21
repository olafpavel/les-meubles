import type { CategoryItem } from '@/types';

export const CATEGORIES: CategoryItem[] = [
  { id: 'all', label: 'Tout', icon: 'apps' },
  { id: 'logement', label: 'Logements', icon: 'home' },
  { id: 'auto', label: 'Autos', icon: 'car' },
  { id: 'service', label: 'Services', icon: 'construct' },
];

export const CATEGORY_LABELS: Record<string, string> = {
  all: 'Tout',
  logement: 'Logement',
  auto: 'Auto',
  service: 'Service',
};

export const AMENITY_LABELS: Record<string, string> = {
  wifi: 'Wi-Fi',
  parking: 'Parking',
  piscine: 'Piscine',
  climatisation: 'Climatisation',
  cuisine: 'Cuisine équipée',
  lave_linge: 'Lave-linge',
  television: 'Télévision',
  securite: 'Sécurité 24h/24',
  petit_dejeuner: 'Petit-déjeuner inclus',
  chauffeur: 'Chauffeur disponible',
  gps: 'GPS intégré',
};
