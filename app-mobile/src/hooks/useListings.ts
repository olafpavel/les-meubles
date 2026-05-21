import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { useFilterStore } from '@/stores/filterStore';
import type { Listing } from '@/types';

export function useListings() {
  const { category, minPrice, maxPrice, city, checkIn, checkOut, guests } =
    useFilterStore();

  return useQuery<Listing[]>({
    queryKey: ['listings', { category, minPrice, maxPrice, city, checkIn, checkOut, guests }],
    queryFn: async () => {
      let query = supabase
        .from('listings')
        .select(
          `
          *,
          host:profiles!host_id(id, full_name, avatar_url, is_host),
          reviews(rating)
        `
        )
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (category) {
        query = query.eq('category', category);
      }
      if (minPrice !== null) {
        query = query.gte('price_per_night', minPrice);
      }
      if (maxPrice !== null) {
        query = query.lte('price_per_night', maxPrice);
      }
      if (city) {
        query = query.ilike('city', `%${city}%`);
      }
      if (guests > 1) {
        query = query.gte('max_guests', guests);
      }

      const { data, error } = await query;
      if (error) throw new Error(error.message);

      return (data ?? []).map((item) => {
        const reviews = (item.reviews as { rating: number }[] | null) ?? [];
        const avgRating =
          reviews.length > 0
            ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
            : 0;
        return {
          ...item,
          average_rating: Math.round(avgRating * 10) / 10,
          review_count: reviews.length,
        } as Listing;
      });
    },
  });
}
