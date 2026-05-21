import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/Button';
import { Colors } from '@/constants/colors';

const { height } = Dimensions.get('window');

// Gradient-like overlay using a Cameroon landscape photo
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1580746738099-a64659c1ab0e?w=800&q=80';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: HERO_IMAGE }}
        style={styles.hero}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.content}>
            {/* Logo / brand */}
            <View style={styles.logoBlock}>
              <View style={styles.logoIcon}>
                <Text style={styles.logoEmoji}>🏠</Text>
              </View>
              <Text style={styles.logoText}>Les Meubles</Text>
              <Text style={styles.tagline}>
                Logements, autos et services au Cameroun
              </Text>
            </View>

            {/* Features */}
            <View style={styles.features}>
              {FEATURES.map((f) => (
                <View key={f.text} style={styles.featureRow}>
                  <Text style={styles.featureIcon}>{f.icon}</Text>
                  <Text style={styles.featureText}>{f.text}</Text>
                </View>
              ))}
            </View>

            {/* CTA buttons */}
            <View style={styles.actions}>
              <Link href="/(auth)/register" asChild>
                <Button label="Créer un compte" size="lg" fullWidth />
              </Link>
              <View style={{ height: 12 }} />
              <Link href="/(auth)/login" asChild>
                <Button
                  label="Se connecter"
                  variant="outline"
                  size="lg"
                  fullWidth
                  style={{ borderColor: Colors.white }}
                />
              </Link>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const FEATURES = [
  { icon: '🏡', text: 'Logements certifiés à Douala, Yaoundé et partout' },
  { icon: '🚗', text: 'Location de voitures avec ou sans chauffeur' },
  { icon: '🔧', text: 'Services à la demande par des pros locaux' },
];

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: { flex: 1, height },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  safeArea: { flex: 1 },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  logoBlock: {
    alignItems: 'center',
    marginTop: 60,
  },
  logoIcon: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoEmoji: { fontSize: 36 },
  logoText: {
    fontSize: 36,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
  },
  features: { gap: 12, marginVertical: 24 },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'rgba(255,255,255,0.12)',
    padding: 14,
    borderRadius: 12,
  },
  featureIcon: { fontSize: 22 },
  featureText: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '500',
    flex: 1,
  },
  actions: { paddingBottom: 8 },
});
