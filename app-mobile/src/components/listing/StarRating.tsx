import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: number;
  showCount?: boolean;
}

export function StarRating({
  rating,
  reviewCount,
  size = 14,
  showCount = true,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
      <View style={{ flexDirection: 'row', gap: 2 }}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <Ionicons key={`full-${i}`} name="star" size={size} color={Colors.star} />
        ))}
        {hasHalf && (
          <Ionicons name="star-half" size={size} color={Colors.star} />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Ionicons key={`empty-${i}`} name="star-outline" size={size} color={Colors.star} />
        ))}
      </View>
      <Text
        style={{
          fontSize: size,
          fontWeight: '600',
          color: Colors.textPrimary,
        }}
      >
        {rating > 0 ? rating.toFixed(1) : 'Nouveau'}
      </Text>
      {showCount && reviewCount !== undefined && reviewCount > 0 && (
        <Text style={{ fontSize: size - 1, color: Colors.textSecondary }}>
          ({reviewCount} avis)
        </Text>
      )}
    </View>
  );
}
