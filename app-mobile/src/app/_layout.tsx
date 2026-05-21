import React, { useEffect, useCallback, Component } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider } from '@tanstack/react-query';
import { View, Text } from 'react-native';
import { queryClient } from '@/lib/queryClient';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/stores/authStore';
import '../global.css';

class ErrorBoundary extends Component<{ children: React.ReactNode }, { error: string | null }> {
  constructor(props: any) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(e: Error) { return { error: e.message }; }
  render() {
    if (this.state.error) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#FAFAF7' }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#E94E1B', marginBottom: 12 }}>Erreur de démarrage</Text>
          <Text style={{ fontSize: 13, color: '#666', textAlign: 'center' }}>{this.state.error}</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

export default function RootLayout() {
  const setSession = useAuthStore((s) => s.setSession);
  const setLoading = useAuthStore((s) => s.setLoading);
  const setProfile = useAuthStore((s) => s.setProfile);

  const fetchProfile = useCallback(
    async (userId: string) => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      if (!error && data) {
        setProfile(data);
      }
    },
    [setProfile]
  );

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        setSession(session);
        if (session?.user) void fetchProfile(session.user.id);
      })
      .catch(() => {
        // Supabase non configuré ou erreur réseau — mode démo
      })
      .finally(() => setLoading(false));

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (session?.user) {
          void fetchProfile(session.user.id);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [setSession, setLoading, fetchProfile]);

  return (
    <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" backgroundColor="#FAFAF7" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="listing/[id]"
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerBackTitle: 'Retour',
          }}
        />
        <Stack.Screen
          name="booking/[listingId]"
          options={{
            headerShown: true,
            headerTitle: 'Réservation',
            headerBackTitle: 'Retour',
            headerStyle: { backgroundColor: '#FAFAF7' },
            headerTintColor: '#1A1A1A',
          }}
        />
        <Stack.Screen
          name="booking/confirmation"
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack>
    </QueryClientProvider>
    </ErrorBoundary>
  );
}

