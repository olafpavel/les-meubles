import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Listing, Review } from '@/types';

export function useListing(id: string) {
  return useQuery<Listing>({
    queryKey: ['listing', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('listings')
        .select(
          `
          *,
          host:profiles!host_id(id, full_name, avatar_url, is_host, phone),
          reviews(
            id,
            rating,
            comment,
            created_at,
            reviewer:profiles!reviewer_id(id, full_name, avatar_url)
          )
        `
        )
        .eq('id', id)
        .single();

      if (error) throw new Error(error.message);

      const reviews = (data.reviews as Review[] | null) ?? [];
      const avgRating =
        reviews.length > 0
          ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
          : 0;

      return {
        ...data,
        average_rating: Math.round(avgRating * 10) / 10,
        review_count: reviews.length,
      } as Listing;
    },
    enabled: !!id,
  });
}
