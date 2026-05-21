import { useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/stores/authStore';
import { useQueryClient } from '@tanstack/react-query';

export function useAuth() {
  const { session, user, profile, isLoading, setSession, setProfile, setLoading, reset } =
    useAuthStore();
  const queryClient = useQueryClient();

  const signInWithEmail = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        setSession(data.session);
        return { data, error: null };
      } catch (err) {
        return { data: null, error: err as Error };
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSession]
  );

  const signUpWithEmail = useCallback(
    async (email: string, password: string, fullName: string) => {
      setLoading(true);
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
          },
        });
        if (error) throw error;
        setSession(data.session);
        return { data, error: null };
      } catch (err) {
        return { data: null, error: err as Error };
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSession]
  );

  const signOut = useCallback(async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
      reset();
      queryClient.clear();
    } finally {
      setLoading(false);
    }
  }, [setLoading, reset, queryClient]);

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
      return { data, error };
    },
    [setProfile]
  );

  return {
    session,
    user,
    profile,
    isLoading,
    isAuthenticated: !!session,
    signInWithEmail,
    signUpWithEmail,
    signOut,
    fetchProfile,
    setSession,
    setLoading,
  };
}
