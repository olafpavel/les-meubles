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

export default function RegisterScreen() {
  const router = useRouter();
  const { signUpWithEmail, isLoading } = useAuth();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!fullName.trim()) newErrors.fullName = 'Le nom complet est requis';
    else if (fullName.trim().length < 2) newErrors.fullName = 'Minimum 2 caractères';

    if (!email.trim()) newErrors.email = "L'email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Format d'email invalide";

    if (!password) newErrors.password = 'Le mot de passe est requis';
    else if (password.length < 6) newErrors.password = 'Minimum 6 caractères';

    if (!confirmPassword) newErrors.confirmPassword = 'Veuillez confirmer le mot de passe';
    else if (password !== confirmPassword)
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;
    const { error } = await signUpWithEmail(
      email.trim().toLowerCase(),
      password,
      fullName.trim()
    );
    if (error) {
      Alert.alert(
        'Inscription impossible',
        error.message.includes('already registered')
          ? 'Cet email est déjà utilisé.'
          : error.message
      );
    } else {
      Alert.alert(
        'Compte créé ! 🎉',
        'Vérifiez votre email pour confirmer votre compte.',
        [{ text: 'OK', onPress: () => router.replace('/(tabs)') }]
      );
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
              Créer un compte ✨
            </Text>
            <Text style={{ fontSize: 16, color: Colors.textSecondary, lineHeight: 22 }}>
              Rejoignez Les Meubles et découvrez les meilleures annonces du Cameroun.
            </Text>
          </View>

          {/* Form */}
          <View style={{ flex: 1 }}>
            <Input
              label="Nom complet"
              placeholder="Jean Dupont"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
              leftIcon="person-outline"
              error={errors.fullName}
            />

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
              placeholder="Minimum 6 caractères"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              leftIcon="lock-closed-outline"
              error={errors.password}
            />

            <Input
              label="Confirmer le mot de passe"
              placeholder="Répétez votre mot de passe"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              leftIcon="lock-closed-outline"
              error={errors.confirmPassword}
            />

            <Text
              style={{
                fontSize: 13,
                color: Colors.textSecondary,
                marginBottom: 20,
                lineHeight: 18,
              }}
            >
              En créant un compte, vous acceptez nos{' '}
              <Text style={{ color: Colors.accent }}>Conditions d'utilisation</Text> et notre{' '}
              <Text style={{ color: Colors.accent }}>Politique de confidentialité</Text>.
            </Text>

            <Button
              label="Créer mon compte"
              onPress={handleRegister}
              loading={isLoading}
              size="lg"
              fullWidth
            />

            <Divider label="ou" style={{ marginVertical: 24 }} />

            <View style={{ alignItems: 'center', paddingBottom: 16 }}>
              <Text style={{ fontSize: 15, color: Colors.textSecondary }}>
                Déjà un compte ?{' '}
                <Link href="/(auth)/login">
                  <Text style={{ color: Colors.accent, fontWeight: '700' }}>
                    Se connecter
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
