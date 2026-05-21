import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/colors';
import { useListings } from '@/hooks/useListings';
import { useFilterStore } from '@/stores/filterStore';
import { useAuthStore } from '@/stores/authStore';
import { ListingCard } from '@/components/listing/ListingCard';
import { CategoryPill } from '@/components/listing/CategoryPill';
import { SearchBar } from '@/components/listing/SearchBar';
import { CATEGORIES } from '@/constants/categories';
import type { ListingCategory } from '@/types';

export default function DiscoveryScreen() {
  const { profile } = useAuthStore();
  const { category, setCategory } = useFilterStore();
  const { data: listings, isLoading, isError, refetch, isRefetching } = useListings();

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bonjour';
    if (hour < 18) return 'Bon après-midi';
    return 'Bonsoir';
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.background }}
      edges={['top']}
    >
      <FlatList
        data={listings ?? []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListingCard listing={item} />}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            tintColor={Colors.accent}
            colors={[Colors.accent]}
          />
        }
        ListHeaderComponent={
          <View>
            {/* Header */}
            <View style={{ paddingVertical: 16 }}>
              <Text style={{ fontSize: 24, fontWeight: '800', color: Colors.textPrimary }}>
                {greeting()}{profile?.full_name ? `, ${profile.full_name.split(' ')[0]}` : ''} 👋
              </Text>
              <Text style={{ fontSize: 15, color: Colors.textSecondary, marginTop: 4 }}>
                Où voulez-vous aller au Cameroun ?
              </Text>
            </View>

            {/* Search */}
            <View style={{ marginBottom: 16 }}>
              <SearchBar />
            </View>

            {/* Categories */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginBottom: 20 }}
              contentContainerStyle={{ paddingRight: 16 }}
            >
              {CATEGORIES.map((cat) => (
                <CategoryPill
                  key={cat.id}
                  item={cat}
                  isSelected={
                    cat.id === 'all' ? category === null : category === cat.id
                  }
                  onPress={() =>
                    setCategory(cat.id === 'all' ? null : (cat.id as ListingCategory))
                  }
                />
              ))}
            </ScrollView>

            {/* Section title */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 12,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: '700', color: Colors.textPrimary }}
              >
                {category
                  ? CATEGORIES.find((c) => c.id === category)?.label ?? 'Annonces'
                  : 'Toutes les annonces'}
              </Text>
              {listings && (
                <Text style={{ fontSize: 13, color: Colors.textSecondary }}>
                  {listings.length} résultat{listings.length !== 1 ? 's' : ''}
                </Text>
              )}
            </View>
          </View>
        }
        ListEmptyComponent={
          isLoading ? (
            <View
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 }}
            >
              <ActivityIndicator size="large" color={Colors.accent} />
              <Text style={{ marginTop: 12, color: Colors.textSecondary, fontSize: 15 }}>
                Chargement des annonces...
              </Text>
            </View>
          ) : isError ? (
            <View
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 }}
            >
              <Text style={{ fontSize: 40, marginBottom: 12 }}>😕</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '700',
                  color: Colors.textPrimary,
                  marginBottom: 8,
                }}
              >
                Une erreur est survenue
              </Text>
              <Text style={{ fontSize: 14, color: Colors.textSecondary, textAlign: 'center' }}>
                Impossible de charger les annonces. Vérifiez votre connexion.
              </Text>
            </View>
          ) : (
            <View
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 }}
            >
              <Text style={{ fontSize: 40, marginBottom: 12 }}>🔍</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '700',
                  color: Colors.textPrimary,
                  marginBottom: 8,
                }}
              >
                Aucune annonce trouvée
              </Text>
              <Text style={{ fontSize: 14, color: Colors.textSecondary, textAlign: 'center' }}>
                Modifiez vos filtres pour voir plus de résultats.
              </Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
}
