import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Colors } from '@/constants/colors';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { useMyBookings, useCancelBooking } from '@/hooks/useBooking';
import type { Booking, BookingStatus } from '@/types';

const STATUS_CONFIG: Record<
  BookingStatus,
  { label: string; variant: 'accent' | 'success' | 'warning' | 'error' | 'neutral' }
> = {
  pending: { label: 'En attente', variant: 'warning' },
  confirmed: { label: 'Confirmée', variant: 'success' },
  cancelled: { label: 'Annulée', variant: 'error' },
  completed: { label: 'Terminée', variant: 'neutral' },
};

function BookingItem({ booking }: { booking: Booking }) {
  const cancelMutation = useCancelBooking();
  const statusConfig = STATUS_CONFIG[booking.status];
  const listing = booking.listing;

  const handleCancel = () => {
    Alert.alert(
      'Annuler la réservation',
      'Êtes-vous sûr de vouloir annuler cette réservation ?',
      [
        { text: 'Non', style: 'cancel' },
        {
          text: 'Oui, annuler',
          style: 'destructive',
          onPress: () => cancelMutation.mutate(booking.id),
        },
      ]
    );
  };

  return (
    <View
      style={{
        backgroundColor: Colors.cardBg,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 12,
        }}
      >
        <View style={{ flex: 1, marginRight: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: Colors.textPrimary,
              marginBottom: 4,
            }}
            numberOfLines={1}
          >
            {listing?.title ?? 'Annonce supprimée'}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Ionicons name="location-outline" size={12} color={Colors.textSecondary} />
            <Text style={{ fontSize: 13, color: Colors.textSecondary }}>
              {listing?.city ?? '–'}
            </Text>
          </View>
        </View>
        <Badge label={statusConfig.label} variant={statusConfig.variant} />
      </View>

      {/* Dates */}
      <View
        style={{
          flexDirection: 'row',
          gap: 16,
          padding: 12,
          backgroundColor: Colors.background,
          borderRadius: 10,
          marginBottom: 12,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 11, color: Colors.textSecondary, fontWeight: '600', marginBottom: 2 }}>
            ARRIVÉE
          </Text>
          <Text style={{ fontSize: 14, fontWeight: '700', color: Colors.textPrimary }}>
            {format(new Date(booking.check_in), 'd MMM yyyy', { locale: fr })}
          </Text>
        </View>
        <View style={{ width: 1, backgroundColor: Colors.border }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 11, color: Colors.textSecondary, fontWeight: '600', marginBottom: 2 }}>
            DÉPART
          </Text>
          <Text style={{ fontSize: 14, fontWeight: '700', color: Colors.textPrimary }}>
            {format(new Date(booking.check_out), 'd MMM yyyy', { locale: fr })}
          </Text>
        </View>
      </View>

      {/* Amount */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 15, color: Colors.textSecondary }}>
          Total payé
        </Text>
        <Text style={{ fontSize: 17, fontWeight: '700', color: Colors.accent }}>
          {booking.total_amount.toLocaleString('fr-CM')} FCFA
        </Text>
      </View>

      {/* Cancel button */}
      {booking.status === 'pending' && (
        <TouchableOpacity
          onPress={handleCancel}
          disabled={cancelMutation.isPending}
          style={{
            marginTop: 12,
            paddingVertical: 10,
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: Colors.error,
            alignItems: 'center',
          }}
          activeOpacity={0.8}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.error }}>
            {cancelMutation.isPending ? 'Annulation...' : 'Annuler la réservation'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default function TripsScreen() {
  const { data: bookings, isLoading, refetch, isRefetching } = useMyBookings();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }} edges={['top']}>
      <View style={{ padding: 24, paddingBottom: 0 }}>
        <Text style={{ fontSize: 24, fontWeight: '800', color: Colors.textPrimary, marginBottom: 4 }}>
          Mes voyages
        </Text>
        <Text style={{ fontSize: 15, color: Colors.textSecondary, marginBottom: 20 }}>
          Toutes vos réservations en un coup d'œil.
        </Text>
      </View>

      {isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={Colors.accent} />
        </View>
      ) : (
        <FlatList
          data={bookings ?? []}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookingItem booking={item} />}
          contentContainerStyle={{ padding: 16, paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
          onRefresh={refetch}
          refreshing={isRefetching}
          ListEmptyComponent={
            <View style={{ flex: 1, alignItems: 'center', padding: 40, marginTop: 40 }}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  backgroundColor: Colors.accentLight,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <Ionicons name="briefcase-outline" size={36} color={Colors.accent} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: Colors.textPrimary,
                  marginBottom: 10,
                }}
              >
                Aucun voyage prévu
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.textSecondary,
                  textAlign: 'center',
                  lineHeight: 22,
                }}
              >
                Explorez les annonces et faites votre première réservation !
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}
