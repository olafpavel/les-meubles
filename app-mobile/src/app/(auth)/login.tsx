import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Divider } from '@/components/ui/Divider';
import { Colors } from '@/constants/colors';
import { useAuth } from '@/hooks/useAuth';

export default function LoginScreen() {
  const router = useRouter();
  const { signInWithEmail, isLoading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Format d\'email invalide';
    if (!password) newErrors.password = 'Le mot de passe est requis';
    else if (password.length < 6)
      newErrors.password = 'Minimum 6 caractères';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;
    const { error } = await signInWithEmail(email.trim().toLowerCase(), password);
    if (error) {
      Alert.alert(
        'Connexion impossible',
        error.message === 'Invalid login credentials'
          ? 'Email ou mot de passe incorrect.'
          : error.message
      );
    } else {
      router.replace('/(tabs)');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, padding: 24 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Back button */}
          <TouchableOpacity
            onPress={() => router.back()}
            hitSlop={8}
            style={{ marginBottom: 24 }}
          >
            <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
          </TouchableOpacity>

          {/* Header */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '800',
                color: Colors.textPrimary,
                marginBottom: 8,
              }}
            >
              Bon retour ! 👋
            </Text>
            <Text style={{ fontSize: 16, color: Colors.textSecondary, lineHeight: 22 }}>
              Connectez-vous à votre compte Les Meubles.
            </Text>
          </View>

          {/* Form */}
          <View style={{ flex: 1 }}>
            <Input
              label="Adresse email"
              placeholder="vous@exemple.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              leftIcon="mail-outline"
              error={errors.email}
            />

            <Input
              label="Mot de passe"
              placeholder="Votre mot de passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              leftIcon="lock-closed-outline"
              error={errors.password}
            />

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: -8, marginBottom: 24 }}>
              <Text style={{ fontSize: 14, color: Colors.accent, fontWeight: '600' }}>
                Mot de passe oublié ?
              </Text>
            </TouchableOpacity>

            <Button
              label="Se connecter"
              onPress={handleLogin}
              loading={isLoading}
              size="lg"
              fullWidth
            />

            <Divider label="ou" style={{ marginVertical: 24 }} />

            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 15, color: Colors.textSecondary }}>
                Pas encore de compte ?{' '}
                <Link href="/(auth)/register">
                  <Text style={{ color: Colors.accent, fontWeight: '700' }}>
                    S'inscrire
                  </Text>
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
