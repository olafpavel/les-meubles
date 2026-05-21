import React from 'react';
import { View, Text, type ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';

type BadgeVariant = 'accent' | 'success' | 'warning' | 'error' | 'neutral';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
}

const variantConfig: Record<BadgeVariant, { bg: string; text: string }> = {
  accent: { bg: Colors.accentLight, text: Colors.accent },
  success: { bg: Colors.successLight, text: Colors.success },
  warning: { bg: Colors.warningLight, text: Colors.warning },
  error: { bg: Colors.errorLight, text: Colors.error },
  neutral: { bg: Colors.border, text: Colors.textSecondary },
};

export function Badge({ label, variant = 'neutral', style }: BadgeProps) {
  const config = variantConfig[variant];
  return (
    <View
      style={[
        {
          backgroundColor: config.bg,
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderRadius: 20,
          alignSelf: 'flex-start',
        },
        style,
      ]}
    >
      <Text style={{ fontSize: 12, fontWeight: '600', color: config.text }}>{label}</Text>
    </View>
  );
}
