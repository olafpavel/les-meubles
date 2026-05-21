import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';

export default function MessagesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }} edges={['top']}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 24, fontWeight: '800', color: Colors.textPrimary, marginBottom: 4 }}>
            Messages
          </Text>
          <Text style={{ fontSize: 15, color: Colors.textSecondary, marginBottom: 40 }}>
            Vos conversations avec les hôtes et les voyageurs.
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: Colors.accentLight,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <Ionicons name="chatbubble-outline" size={36} color={Colors.accent} />
          </View>
          <Text style={{ fontSize: 20, fontWeight: '700', color: Colors.textPrimary, marginBottom: 10 }}>
            Aucun message
          </Text>
          <Text style={{ fontSize: 15, color: Colors.textSecondary, textAlign: 'center', lineHeight: 22 }}>
            Lorsque vous contacterez un hôte ou effectuerez une réservation, vos conversations apparaîtront ici.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
