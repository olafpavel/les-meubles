import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { Avatar } from '@/components/ui/Avatar';
import { Divider } from '@/components/ui/Divider';
import { Badge } from '@/components/ui/Badge';
import { useAuth } from '@/hooks/useAuth';

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
  danger?: boolean;
  badge?: string;
}

function MenuItem({ icon, label, onPress, danger, badge }: MenuItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
        gap: 14,
      }}
    >
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          backgroundColor: danger ? Colors.errorLight : Colors.accentLight,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name={icon} size={18} color={danger ? Colors.error : Colors.accent} />
      </View>
      <Text
        style={{
          flex: 1,
          fontSize: 16,
          color: danger ? Colors.error : Colors.textPrimary,
          fontWeight: '500',
        }}
      >
        {label}
      </Text>
      {badge && <Badge label={badge} variant="accent" />}
      <Ionicons name="chevron-forward" size={16} color={Colors.textSecondary} />
    </TouchableOpacity>
  );
}

export default function ProfileScreen() {
  const { profile, user, signOut } = useAuth();

  const handleSignOut = () => {
    Alert.alert(
      'Se déconnecter',
      'Êtes-vous sûr de vouloir vous déconnecter ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Se déconnecter',
          style: 'destructive',
          onPress: () => void signOut(),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ padding: 24, paddingBottom: 0 }}>
          <Text style={{ fontSize: 24, fontWeight: '800', color: Colors.textPrimary, marginBottom: 20 }}>
            Mon profil
          </Text>

          {/* Profile card */}
          <View
            style={{
              backgroundColor: Colors.cardBg,
              borderRadius: 20,
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.07,
              shadowRadius: 8,
              elevation: 2,
              marginBottom: 24,
            }}
          >
            <Avatar
              uri={profile?.avatar_url}
              name={profile?.full_name}
              size={64}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '800',
                  color: Colors.textPrimary,
                  marginBottom: 4,
                }}
                numberOfLines={1}
              >
                {profile?.full_name ?? 'Utilisateur'}
              </Text>
              <Text
                style={{ fontSize: 14, color: Colors.textSecondary }}
                numberOfLines={1}
              >
                {user?.email ?? ''}
              </Text>
              {profile?.is_host && (
                <View style={{ marginTop: 6 }}>
                  <Badge label="Hôte vérifié" variant="success" />
                </View>
              )}
            </View>
            <TouchableOpacity
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: Colors.accentLight,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="pencil-outline" size={16} color={Colors.accent} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 24,
            marginBottom: 24,
            backgroundColor: Colors.cardBg,
            borderRadius: 16,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.07,
            shadowRadius: 8,
            elevation: 2,
          }}
        >
          {[
            { label: 'Voyages', value: '0' },
            { label: 'Avis', value: '0' },
            { label: 'Annonces', value: '0' },
          ].map((stat, idx, arr) => (
            <View
              key={stat.label}
              style={{
                flex: 1,
                alignItems: 'center',
                paddingVertical: 16,
                borderRightWidth: idx < arr.length - 1 ? 1 : 0,
                borderRightColor: Colors.border,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: '800', color: Colors.accent }}>
                {stat.value}
              </Text>
              <Text style={{ fontSize: 12, color: Colors.textSecondary, fontWeight: '500' }}>
                {stat.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Menu sections */}
        <View
          style={{
            marginHorizontal: 24,
            backgroundColor: Colors.cardBg,
            borderRadius: 16,
            marginBottom: 16,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.07,
            shadowRadius: 8,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: Colors.textSecondary,
              paddingHorizontal: 16,
              paddingTop: 14,
              paddingBottom: 4,
              letterSpacing: 0.8,
            }}
          >
            MON COMPTE
          </Text>
          <MenuItem icon="person-outline" label="Modifier mon profil" />
          <Divider style={{ marginVertical: 0 }} />
          <MenuItem icon="shield-checkmark-outline" label="Vérification d'identité" badge="Requis" />
          <Divider style={{ marginVertical: 0 }} />
          <MenuItem icon="card-outline" label="Moyens de paiement" />
          <Divider style={{ marginVertical: 0 }} />
          <MenuItem icon="notifications-outline" label="Notifications" />
        </View>

        <View
          style={{
            marginHorizontal: 24,
            backgroundColor: Colors.cardBg,
            borderRadius: 16,
            marginBottom: 16,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.07,
            shadowRadius: 8,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: Colors.textSecondary,
              paddingHorizontal: 16,
              paddingTop: 14,
              paddingBottom: 4,
              letterSpacing: 0.8,
            }}
          >
            HÔTE
          </Text>
          <MenuItem icon="add-circle-outline" label="Publier une annonce" />
          <Divider style={{ marginVertical: 0 }} />
          <MenuItem icon="home-outline" label="Mes annonces" />
          <Divider style={{ marginVertical: 0 }} />
          <MenuItem icon="stats-chart-outline" label="Tableau de bord hôte" />
        </View>

        <View
          style={{
            marginHorizontal: 24,
            backgroundColor: Colors.cardBg,
            borderRadius: 16,
            marginBottom: 32,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.07,
            shadowRadius: 8,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: Colors.textSecondary,
              paddingHorizontal: 16,
              paddingTop: 14,
              paddingBottom: 4,
              letterSpacing: 0.8,
            }}
          >
            ASSISTANCE
          </Text>
          <MenuItem icon="help-circle-outline" label="Centre d'aide" />
          <Divider style={{ marginVertical: 0 }} />
          <MenuItem icon="document-text-outline" label="Conditions d'utilisation" />
          <Divider style={{ marginVertical: 0 }} />
          <MenuItem icon="log-out-outline" label="Se déconnecter" onPress={handleSignOut} danger />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
