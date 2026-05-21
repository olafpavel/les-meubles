import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { useFilterStore } from '@/stores/filterStore';

export function SearchBar() {
  const { city, setCity } = useFilterStore();
  const [value, setValue] = useState(city ?? '');

  const handleSubmit = () => {
    setCity(value.trim() || null);
  };

  const handleClear = () => {
    setValue('');
    setCity(null);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderWidth: 1.5,
        borderColor: Colors.border,
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 10,
        gap: 10,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <Ionicons name="search" size={20} color={Colors.textSecondary} />
      <TextInput
        style={{
          flex: 1,
          fontSize: 15,
          color: Colors.textPrimary,
        }}
        placeholder="Rechercher par ville..."
        placeholderTextColor={Colors.textSecondary}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={handleClear} hitSlop={8}>
          <Ionicons name="close-circle" size={18} color={Colors.textSecondary} />
        </TouchableOpacity>
      )}
    </View>
  );
}
