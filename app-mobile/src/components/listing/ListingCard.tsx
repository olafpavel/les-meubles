import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { StarRating } from './StarRating';
import { PriceTag } from './PriceTag';
import { CATEGORY_LABELS } from '@/constants/categories';
import type { Listing } from '@/types';

interface ListingCardProps {
  listing: Listing;
  horizontal?: boolean;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 32;

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80';

export function ListingCard({ listing, horizontal = false }: ListingCardProps) {
  const coverPhoto = listing.photos[0] ?? PLACEHOLDER_IMAGE;

  return (
    <Link href={`/listing/${listing.id}`} asChild>
      <TouchableOpacity
        activeOpacity={0.92}
        style={{
          backgroundColor: Colors.cardBg,
          borderRadius: 16,
          overflow: 'hidden',
          marginBottom: 16,
          width: horizontal ? 260 : CARD_WIDTH,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 12,
          elevation: 3,
        }}
      >
        {/* Photo */}
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: coverPhoto }}
            style={{
              width: '100%',
              height: horizontal ? 160 : 220,
            }}
            resizeMode="cover"
          />
          {/* Category badge */}
          <View
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              backgroundColor: Colors.accent,
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 11, fontWeight: '700', color: Colors.white }}>
              {CATEGORY_LABELS[listing.category]}
            </Text>
          </View>
        </View>

        {/* Content */}
        <View style={{ padding: 14 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: 6,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: Colors.textPrimary,
                flex: 1,
                marginRight: 8,
              }}
              numberOfLines={1}
            >
              {listing.title}
            </Text>
          </View>

          {/* Location */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
              marginBottom: 8,
            }}
          >
            <Ionicons name="location-outline" size={13} color={Colors.textSecondary} />
            <Text style={{ fontSize: 13, color: Colors.textSecondary }} numberOfLines={1}>
              {listing.city}
              {listing.address ? ` · ${listing.address}` : ''}
            </Text>
          </View>

          {/* Rating */}
          <View style={{ marginBottom: 10 }}>
            <StarRating
              rating={listing.average_rating ?? 0}
              reviewCount={listing.review_count ?? 0}
              size={13}
            />
          </View>

          {/* Price */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <PriceTag
              price={listing.price_per_night}
              currency={listing.currency}
              category={listing.category}
              size="sm"
            />
            {listing.max_guests > 1 && (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                <Ionicons name="people-outline" size={13} color={Colors.textSecondary} />
                <Text style={{ fontSize: 12, color: Colors.textSecondary }}>
                  {listing.max_guests} pers. max
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
