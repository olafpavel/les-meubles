import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { differenceInDays, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Colors } from '@/constants/colors';
import { useListing } from '@/hooks/useListing';
import { useCreateBooking } from '@/hooks/useBooking';
import { DateRangePicker } from '@/components/booking/DateRangePicker';
import { PriceSummary } from '@/components/booking/PriceSummary';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';

export default function BookingScreen() {
  const { listingId } = useLocalSearchParams<{ listingId: string }>();
  const router = useRouter();
  const { data: listing } = useListing(listingId);
  const createBooking = useCreateBooking();

  const [checkIn, setCheckIn] = useState<string | null>(null);
  const [checkOut, setCheckOut] = useState<string | null>(null);
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const nights = checkIn && checkOut ? differenceInDays(new Date(checkOut), new Date(checkIn)) : 0;

  const handleConfirm = async () => {
    if (!checkIn || !checkOut) {
      Alert.alert('Dates manquantes', 'Veuillez sélectionner vos dates de séjour.');
      return;
    }
    if (nights <= 0) {
      Alert.alert('Dates invalides', 'La date de départ doit être après la date d\'arrivée.');
      return;
    }
    if (!listing) return;

    const result = await createBooking.mutateAsync({
      listingId,
      checkIn,
      checkOut,
      guests,
      message,
      pricePerNight: listing.price_per_night,
    });

    router.replace({
      pathname: '/booking/confirmation',
      params: { bookingId: result.id },
    });
  };

  if (!listing) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.background }}>
        <Text style={{ color: Colors.textSecondary }}>Chargement...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }} edges={['bottom']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 32 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Listing summary */}
        <View
          style={{
            backgroundColor: Colors.cardBg,
            borderRadius: 16,
            padding: 16,
            borderWidth: 1,
            borderColor: Colors.border,
            marginBottom: 20,
          }}
        >
          <Text
            style={{ fontSize: 17, fontWeight: '700', color: Colors.textPrimary, marginBottom: 4 }}
            numberOfLines={2}
          >
            {listing.title}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Ionicons name="location-outline" size={13} color={Colors.textSecondary} />
            <Text style={{ fontSize: 13, color: Colors.textSecondary }}>{listing.city}</Text>
          </View>
        </View>

        {/* Date selection */}
        <Text style={{ fontSize: 18, fontWeight: '700', color: Colors.textPrimary, marginBottom: 12 }}>
          Dates du séjour
        </Text>

        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          activeOpacity={0.8}
          style={{
            borderWidth: 1.5,
            borderColor: checkIn ? Colors.accent : Colors.border,
            borderRadius: 14,
            overflow: 'hidden',
            marginBottom: 20,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                padding: 14,
                borderRightWidth: 1,
                borderRightColor: Colors.border,
              }}
            >
              <Text style={{ fontSize: 11, fontWeight: '700', color: Colors.textSecondary, marginBottom: 4 }}>
                ARRIVÉE
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  color: checkIn ? Colors.textPrimary : Colors.textSecondary,
                }}
              >
                {checkIn
                  ? format(new Date(checkIn), 'd MMM yyyy', { locale: fr })
                  : 'Sélectionner'}
              </Text>
            </View>
            <View style={{ flex: 1, padding: 14 }}>
              <Text style={{ fontSize: 11, fontWeight: '700', color: Colors.textSecondary, marginBottom: 4 }}>
                DÉPART
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  color: checkOut ? Colors.textPrimary : Colors.textSecondary,
                }}
              >
                {checkOut
                  ? format(new Date(checkOut), 'd MMM yyyy', { locale: fr })
                  : 'Sélectionner'}
              </Text>
            </View>
          </View>
          {nights > 0 && (
            <View
              style={{
                backgroundColor: Colors.accentLight,
                padding: 10,
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: '700', color: Colors.accent }}>
                {nights} nuit{nights > 1 ? 's' : ''} sélectionnée{nights > 1 ? 's' : ''}
              </Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Guests */}
        <Text style={{ fontSize: 18, fontWeight: '700', color: Colors.textPrimary, marginBottom: 12 }}>
          Nombre de personnes
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.cardBg,
            borderRadius: 14,
            borderWidth: 1.5,
            borderColor: Colors.border,
            padding: 12,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => setGuests((g) => Math.max(1, g - 1))}
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: guests > 1 ? Colors.accentLight : Colors.border,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            disabled={guests <= 1}
          >
            <Ionicons name="remove" size={18} color={guests > 1 ? Colors.accent : Colors.textSecondary} />
          </TouchableOpacity>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '700',
              color: Colors.textPrimary,
            }}
          >
            {guests}
          </Text>
          <TouchableOpacity
            onPress={() => setGuests((g) => Math.min(listing.max_guests, g + 1))}
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: guests < listing.max_guests ? Colors.accentLight : Colors.border,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            disabled={guests >= listing.max_guests}
          >
            <Ionicons name="add" size={18} color={guests < listing.max_guests ? Colors.accent : Colors.textSecondary} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 12, color: Colors.textSecondary, marginTop: -14, marginBottom: 20 }}>
          Maximum {listing.max_guests} personne{listing.max_guests > 1 ? 's' : ''}
        </Text>

        {/* Message to host */}
        <Text style={{ fontSize: 18, fontWeight: '700', color: Colors.textPrimary, marginBottom: 12 }}>
          Message à l'hôte{' '}
          <Text style={{ fontSize: 14, fontWeight: '400', color: Colors.textSecondary }}>
            (optionnel)
          </Text>
        </Text>
        <View
          style={{
            backgroundColor: Colors.cardBg,
            borderRadius: 14,
            borderWidth: 1.5,
            borderColor: Colors.border,
            marginBottom: 24,
          }}
        >
          <TextInput
            multiline
            numberOfLines={4}
            value={message}
            onChangeText={setMessage}
            placeholder="Présentez-vous et précisez vos besoins..."
            placeholderTextColor={Colors.textSecondary}
            style={{
              padding: 14,
              fontSize: 15,
              color: Colors.textPrimary,
              minHeight: 100,
              textAlignVertical: 'top',
            }}
          />
        </View>

        {/* Price summary */}
        {checkIn && checkOut && nights > 0 && (
          <View style={{ marginBottom: 24 }}>
            <PriceSummary
              pricePerNight={listing.price_per_night}
              currency={listing.currency}
              checkIn={checkIn}
              checkOut={checkOut}
              category={listing.category}
            />
          </View>
        )}

        {/* CTA */}
        <Button
          label={checkIn && checkOut ? 'Confirmer la réservation' : 'Sélectionner les dates'}
          onPress={checkIn && checkOut ? handleConfirm : () => setShowDatePicker(true)}
          loading={createBooking.isPending}
          size="lg"
          fullWidth
        />

        {createBooking.isError && (
          <Text style={{ fontSize: 14, color: Colors.error, textAlign: 'center', marginTop: 12 }}>
            {createBooking.error?.message ?? 'Une erreur est survenue. Réessayez.'}
          </Text>
        )}
      </ScrollView>

      <DateRangePicker
        checkIn={checkIn}
        checkOut={checkOut}
        onSelect={(ci, co) => {
          setCheckIn(ci);
          setCheckOut(co);
        }}
        visible={showDatePicker}
        onClose={() => setShowDatePicker(false)}
      />
    </SafeAreaView>
  );
}
