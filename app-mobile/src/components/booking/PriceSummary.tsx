import React from 'react';
import { View, Text } from 'react-native';
import { differenceInDays, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Colors } from '@/constants/colors';
import { Divider } from '@/components/ui/Divider';
import type { ListingCategory } from '@/types';

interface PriceSummaryProps {
  pricePerNight: number;
  currency: string;
  checkIn: string;
  checkOut: string;
  category?: ListingCategory;
}

const UNIT_LABELS: Record<string, string> = {
  logement: 'nuit',
  auto: 'jour',
  service: 'prestation',
};

function formatAmount(amount: number, currency: string): string {
  if (currency === 'XAF') {
    return `${amount.toLocaleString('fr-CM')} FCFA`;
  }
  return `${amount.toLocaleString()} ${currency}`;
}

export function PriceSummary({
  pricePerNight,
  currency,
  checkIn,
  checkOut,
  category = 'logement',
}: PriceSummaryProps) {
  const nights = differenceInDays(new Date(checkOut), new Date(checkIn));
  const subtotal = nights * pricePerNight;
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;
  const unit = UNIT_LABELS[category] ?? 'nuit';
  const unitPlural = nights > 1 ? `${unit}s` : unit;

  const Row = ({
    label,
    value,
    bold,
  }: {
    label: string;
    value: string;
    bold?: boolean;
  }) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          fontSize: bold ? 16 : 15,
          fontWeight: bold ? '700' : '400',
          color: bold ? Colors.textPrimary : Colors.textSecondary,
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontSize: bold ? 16 : 15,
          fontWeight: bold ? '700' : '500',
          color: bold ? Colors.accent : Colors.textPrimary,
        }}
      >
        {value}
      </Text>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: Colors.cardBg,
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: Colors.border,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: Colors.textPrimary,
          marginBottom: 14,
        }}
      >
        Détail du prix
      </Text>

      <Text style={{ fontSize: 13, color: Colors.textSecondary, marginBottom: 12 }}>
        {format(new Date(checkIn), 'd MMM', { locale: fr })} →{' '}
        {format(new Date(checkOut), 'd MMM yyyy', { locale: fr })} · {nights}{' '}
        {unitPlural}
      </Text>

      <Row
        label={`${formatAmount(pricePerNight, currency)} × ${nights} ${unitPlural}`}
        value={formatAmount(subtotal, currency)}
      />
      <Row label="Frais de service (10%)" value={formatAmount(serviceFee, currency)} />
      <Divider style={{ marginVertical: 10 }} />
      <Row label="Total" value={formatAmount(total, currency)} bold />
    </View>
  );
}
