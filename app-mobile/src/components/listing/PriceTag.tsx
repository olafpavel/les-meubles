import React from 'react';
import { View, Text, type ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';
import type { ListingCategory } from '@/types';

interface PriceTagProps {
  price: number;
  currency?: string;
  category?: ListingCategory;
  style?: ViewStyle;
  size?: 'sm' | 'md' | 'lg';
}

const UNIT_LABELS: Record<string, string> = {
  logement: '/nuit',
  auto: '/jour',
  service: '/prestation',
};

function formatPrice(price: number, currency: string): string {
  if (currency === 'XAF') {
    return `${price.toLocaleString('fr-CM')} FCFA`;
  }
  return `${price.toLocaleString()} ${currency}`;
}

export function PriceTag({ price, currency = 'XAF', category, style, size = 'md' }: PriceTagProps) {
  const unit = category ? UNIT_LABELS[category] : '';
  const fontSize = size === 'sm' ? 14 : size === 'lg' ? 22 : 17;
  const unitFontSize = fontSize - 3;

  return (
    <View style={[{ flexDirection: 'row', alignItems: 'baseline', gap: 2 }, style]}>
      <Text
        style={{
          fontSize,
          fontWeight: '700',
          color: Colors.accent,
        }}
      >
        {formatPrice(price, currency)}
      </Text>
      {unit ? (
        <Text style={{ fontSize: unitFontSize, color: Colors.textSecondary, fontWeight: '400' }}>
          {unit}
        </Text>
      ) : null}
    </View>
  );
}
