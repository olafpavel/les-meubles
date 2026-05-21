import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Colors } from '@/constants/colors';
import { useListing } from '@/hooks/useListing';
import { useAuthStore } from '@/stores/authStore';
import { StarRating } from '@/components/listing/StarRating';
import { PriceTag } from '@/components/listing/PriceTag';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Divider } from '@/components/ui/Divider';
import { Button } from '@/components/ui/Button';
import { CATEGORY_LABELS, AMENITY_LABELS } from '@/constants/categories';
import type { Review } from '@/types';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const PLACEHOLDER_IMAGE =
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80';

export default function ListingDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { session } = useAuthStore();
  const { data: listing, isLoading, isError } = useListing(id);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const photos =
    listing?.photos && listing.photos.length > 0
      ? listing.photos
      : [PLACEHOLDER_IMAGE];

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.background }}>
        <ActivityIndicator size="large" color={Colors.accent} />
      </View>
    );
  }

  if (isError || !listing) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 }}>
          <Text style={{ fontSize: 40, marginBottom: 12 }}>😕</Text>
          <Text style={{ fontSize: 18, fontWeight: '700', color: Colors.textPrimary, marginBottom: 8 }}>
            Annonce introuvable
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={{ fontSize: 15, color: Colors.accent, fontWeight: '600' }}>
              Retourner en arrière
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const handleBook = () => {
    if (!session) {
      router.push('/(auth)/login');
      return;
    }
    router.push(`/booking/${listing.id}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {/* Photo carousel */}
        <View style={{ position: 'relative' }}>
          <FlatList
            data={photos}
            keyExtractor={(_, idx) => idx.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const idx = Math.round(
                e.nativeEvent.contentOffset.x / SCREEN_WIDTH
              );
              setActivePhotoIndex(idx);
            }}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={{ width: SCREEN_WIDTH, height: 320 }}
                resizeMode="cover"
              />
            )}
          />

          {/* Dots indicator */}
          {photos.length > 1 && (
            <View style={styles.dotsContainer}>
              {photos.map((_, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.dot,
                    idx === activePhotoIndex && styles.dotActive,
                  ]}
                />
              ))}
            </View>
          )}

          {/* Category badge */}
          <View style={styles.categoryBadge}>
            <Text style={{ fontSize: 12, fontWeight: '700', color: Colors.white }}>
              {CATEGORY_LABELS[listing.category]}
            </Text>
          </View>
        </View>

        <View style={{ padding: 20 }}>
          {/* Title and rating */}
          <Text
            style={{
              fontSize: 24,
              fontWeight: '800',
              color: Colors.textPrimary,
              marginBottom: 8,
              lineHeight: 30,
            }}
          >
            {listing.title}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              marginBottom: 12,
            }}
          >
            <Ionicons name="location" size={15} color={Colors.accent} />
            <Text style={{ fontSize: 15, color: Colors.textSecondary, flex: 1 }}>
              {listing.city}
              {listing.address ? ` · ${listing.address}` : ''}
            </Text>
          </View>

          <StarRating
            rating={listing.average_rating ?? 0}
            reviewCount={listing.review_count ?? 0}
            size={15}
          />

          <Divider style={{ marginVertical: 20 }} />

          {/* Host info */}
          {listing.host && (
            <View>
              <Text style={{ fontSize: 18, fontWeight: '700', color: Colors.textPrimary, marginBottom: 14 }}>
                Votre hôte
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 14,
                  padding: 16,
                  backgroundColor: Colors.cardBg,
                  borderRadius: 14,
                  borderWidth: 1,
                  borderColor: Colors.border,
                }}
              >
                <Avatar
                  uri={listing.host.avatar_url}
                  name={listing.host.full_name}
                  size={52}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: Colors.textPrimary }}>
                    {listing.host.full_name ?? 'Hôte'}
                  </Text>
                  {listing.host.is_host && (
                    <Badge label="Hôte vérifié" variant="success" style={{ marginTop: 4 }} />
                  )}
                </View>
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: Colors.accentLight,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Ionicons name="chatbubble-outline" size={18} color={Colors.accent} />
                </TouchableOpacity>
              </View>

              <Divider style={{ marginVertical: 20 }} />
            </View>
          )}

          {/* Description */}
          {listing.description && (
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: Colors.textPrimary, marginBottom: 10 }}>
                Description
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.textSecondary,
                  lineHeight: 24,
                }}
              >
                {listing.description}
              </Text>
            </View>
          )}

          {/* Capacity */}
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.cardBg,
                borderRadius: 12,
                padding: 14,
                borderWidth: 1,
                borderColor: Colors.border,
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Ionicons name="people-outline" size={22} color={Colors.accent} />
              <Text style={{ fontSize: 15, fontWeight: '700', color: Colors.textPrimary }}>
                {listing.max_guests}
              </Text>
              <Text style={{ fontSize: 12, color: Colors.textSecondary }}>
                {listing.max_guests > 1 ? 'personnes max' : 'personne max'}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.cardBg,
                borderRadius: 12,
                padding: 14,
                borderWidth: 1,
                borderColor: Colors.border,
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Ionicons name="cash-outline" size={22} color={Colors.accent} />
              <Text style={{ fontSize: 13, fontWeight: '700', color: Colors.textPrimary }}>
                {listing.currency}
              </Text>
              <Text style={{ fontSize: 12, color: Colors.textSecondary }}>Devise</Text>
            </View>
          </View>

          {/* Amenities */}
          {listing.amenities.length > 0 && (
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: Colors.textPrimary, marginBottom: 14 }}>
                Équipements
              </Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                {listing.amenities.map((amenity) => (
                  <View
                    key={amenity}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 6,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      backgroundColor: Colors.cardBg,
                      borderRadius: 24,
                      borderWidth: 1,
                      borderColor: Colors.border,
                    }}
                  >
                    <Ionicons name="checkmark-circle" size={14} color={Colors.success} />
                    <Text style={{ fontSize: 13, color: Colors.textPrimary, fontWeight: '500' }}>
                      {AMENITY_LABELS[amenity] ?? amenity}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Reviews */}
          {listing.reviews && listing.reviews.length > 0 && (
            <View style={{ marginBottom: 20 }}>
              <Divider style={{ marginVertical: 20 }} />
              <Text style={{ fontSize: 18, fontWeight: '700', color: Colors.textPrimary, marginBottom: 14 }}>
                Avis ({listing.review_count})
              </Text>
              {(listing.reviews as Review[]).slice(0, 5).map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </View>
          )}
        </View>

        {/* Bottom padding for footer */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Sticky footer */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: Colors.white,
          borderTopWidth: 1,
          borderTopColor: Colors.border,
          padding: 16,
          paddingBottom: 32,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <PriceTag
              price={listing.price_per_night}
              currency={listing.currency}
              category={listing.category}
              size="lg"
            />
          </View>
          <Button
            label="Réserver"
            onPress={handleBook}
            size="md"
            style={{ paddingHorizontal: 32 }}
          />
        </View>
      </View>
    </View>
  );
}

function ReviewItem({ review }: { review: Review }) {
  return (
    <View style={{ marginBottom: 16, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: Colors.border }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        <Avatar
          uri={review.reviewer?.avatar_url}
          name={review.reviewer?.full_name}
          size={40}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: '700', color: Colors.textPrimary }}>
            {review.reviewer?.full_name ?? 'Voyageur'}
          </Text>
          <Text style={{ fontSize: 12, color: Colors.textSecondary }}>
            {format(new Date(review.created_at), 'MMMM yyyy', { locale: fr })}
          </Text>
        </View>
        <StarRating rating={review.rating} showCount={false} size={13} />
      </View>
      {review.comment && (
        <Text style={{ fontSize: 14, color: Colors.textSecondary, lineHeight: 21 }}>
          {review.comment}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dotsContainer: {
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  dotActive: {
    width: 18,
    backgroundColor: Colors.white,
  },
  categoryBadge: {
    position: 'absolute',
    top: 56,
    left: 16,
    backgroundColor: Colors.accent,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
