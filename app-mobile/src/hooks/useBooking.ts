import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { differenceInDays } from 'date-fns';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/stores/authStore';
import type { Booking, BookingDraft } from '@/types';

export function useMyBookings() {
  const { user } = useAuthStore();

  return useQuery<Booking[]>({
    queryKey: ['my-bookings', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('bookings')
        .select(
          `
          *,
          listing:listings(
            id, title, photos, city, category, price_per_night, currency,
            host:profiles!host_id(id, full_name, avatar_url)
          )
        `
        )
        .eq('guest_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw new Error(error.message);
      return (data ?? []) as Booking[];
    },
    enabled: !!user,
  });
}

export function useCreateBooking() {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();

  return useMutation<Booking, Error, BookingDraft & { pricePerNight: number }>({
    mutationFn: async ({ listingId, checkIn, checkOut, guests, message, pricePerNight }) => {
      if (!user) throw new Error('Vous devez être connecté');

      const nights = differenceInDays(new Date(checkOut), new Date(checkIn));
      if (nights <= 0) throw new Error('Les dates sélectionnées sont invalides');

      const totalAmount = nights * pricePerNight;

      const { data, error } = await supabase
        .from('bookings')
        .insert({
          listing_id: listingId,
          guest_id: user.id,
          check_in: checkIn,
          check_out: checkOut,
          total_amount: totalAmount,
          guest_count: guests,
          message: message || null,
          status: 'pending',
        })
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data as Booking;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['my-bookings'] });
    },
  });
}

export function useCancelBooking() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: async (bookingId) => {
      const { error } = await supabase
        .from('bookings')
        .update({ status: 'cancelled' })
        .eq('id', bookingId);

      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['my-bookings'] });
    },
  });
}
