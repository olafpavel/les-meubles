import React from 'react';
import { View, Image, Text, type ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';

interface AvatarProps {
  uri?: string | null;
  name?: string | null;
  size?: number;
  style?: ViewStyle;
}

function getInitials(name?: string | null): string {
  if (!name) return '?';
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export function Avatar({ uri, name, size = 40, style }: AvatarProps) {
  const fontSize = Math.round(size * 0.35);

  if (uri) {
    return (
      <Image
        source={{ uri }}
        style={[
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: Colors.border,
          },
          style,
        ]}
      />
    );
  }

  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: Colors.accentLight,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
    >
      <Text
        style={{ fontSize, fontWeight: '700', color: Colors.accent }}
      >
        {getInitials(name)}
      </Text>
    </View>
  );
}
