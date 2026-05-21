import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { Button } from '@/components/ui/Button';

export default function ConfirmationScreen() {
  const { bookingId } = useLocalSearchParams<{ bookingId: string }>();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={styles.container}>
        {/* Success icon */}
        <View style={styles.iconWrapper}>
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark" size={48} color={Colors.white} />
          </View>
          {/* Decorative rings */}
          <View style={[styles.ring, styles.ring1]} />
          <View style={[styles.ring, styles.ring2]} />
        </View>

        {/* Text */}
        <Text style={styles.title}>Réservation envoyée ! 🎉</Text>
        <Text style={styles.subtitle}>
          Votre demande de réservation a été transmise à l'hôte. Vous recevrez une confirmation
          dès qu'elle sera acceptée.
        </Text>

        {/* Booking reference */}
        {bookingId && (
          <View style={styles.referenceBox}>
            <Text style={styles.referenceLabel}>Référence de réservation</Text>
            <Text style={styles.referenceValue}>
              #{bookingId.slice(0, 8).toUpperCase()}
            </Text>
          </View>
        )}

        {/* Steps */}
        <View style={styles.steps}>
          {STEPS.map((step, idx) => (
            <View key={idx} style={styles.stepRow}>
              <View
                style={[
                  styles.stepDot,
                  idx === 0 && { backgroundColor: Colors.success },
                ]}
              >
                {idx === 0 ? (
                  <Ionicons name="checkmark" size={12} color={Colors.white} />
                ) : (
                  <Text style={styles.stepNumber}>{idx + 1}</Text>
                )}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDesc}>{step.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <Button
            label="Voir mes voyages"
            onPress={() => router.replace('/(tabs)/trips')}
            size="lg"
            fullWidth
          />
          <View style={{ height: 12 }} />
          <Button
            label="Continuer à explorer"
            variant="outline"
            onPress={() => router.replace('/(tabs)')}
            size="lg"
            fullWidth
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const STEPS = [
  {
    title: 'Demande envoyée',
    desc: 'L\'hôte a reçu votre demande de réservation.',
  },
  {
    title: 'En attente de confirmation',
    desc: 'L\'hôte dispose de 24h pour accepter ou refuser.',
  },
  {
    title: 'Confirmation et paiement',
    desc: 'Une fois acceptée, procédez au paiement sécurisé.',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    paddingTop: 40,
  },
  iconWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    width: 120,
    height: 120,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  ring: {
    position: 'absolute',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: Colors.success,
    opacity: 0.2,
  },
  ring1: { width: 96, height: 96 },
  ring2: { width: 116, height: 116, opacity: 0.1 },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  referenceBox: {
    backgroundColor: Colors.successLight,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 28,
    borderWidth: 1,
    borderColor: Colors.success,
  },
  referenceLabel: {
    fontSize: 12,
    color: Colors.success,
    fontWeight: '600',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  referenceValue: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.success,
    letterSpacing: 2,
  },
  steps: {
    width: '100%',
    backgroundColor: Colors.cardBg,
    borderRadius: 16,
    padding: 16,
    gap: 16,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
  },
  stepDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    flexShrink: 0,
  },
  stepNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  stepDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  actions: { width: '100%' },
});
