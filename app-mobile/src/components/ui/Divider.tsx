import React from 'react';
import { View, Text, type ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';

interface DividerProps {
  label?: string;
  style?: ViewStyle;
}

export function Divider({ label, style }: DividerProps) {
  if (label) {
    return (
      <View
        style={[
          { flexDirection: 'row', alignItems: 'center', marginVertical: 16 },
          style,
        ]}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: Colors.border }} />
        <Text
          style={{
            marginHorizontal: 12,
            fontSize: 13,
            color: Colors.textSecondary,
            fontWeight: '500',
          }}
        >
          {label}
        </Text>
        <View style={{ flex: 1, height: 1, backgroundColor: Colors.border }} />
      </View>
    );
  }

  return (
    <View
      style={[
        { height: 1, backgroundColor: Colors.border, marginVertical: 16 },
        style,
      ]}
    />
  );
}
