import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import type { CategoryItem } from '@/types';

interface CategoryPillProps {
  item: CategoryItem;
  isSelected: boolean;
  onPress: () => void;
}

export function CategoryPill({ item, isSelected, onPress }: CategoryPillProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 24,
        backgroundColor: isSelected ? Colors.accent : Colors.cardBg,
        borderWidth: 1.5,
        borderColor: isSelected ? Colors.accent : Colors.border,
        marginRight: 8,
      }}
    >
      <Ionicons
        name={item.icon as keyof typeof Ionicons.glyphMap}
        size={16}
        color={isSelected ? Colors.white : Colors.textSecondary}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: '600',
          color: isSelected ? Colors.white : Colors.textPrimary,
        }}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
}
