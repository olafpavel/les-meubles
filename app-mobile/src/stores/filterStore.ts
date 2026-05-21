import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { FilterState, ListingCategory } from '@/types';

interface FilterStoreState extends FilterState {
  setCategory: (category: ListingCategory | null) => void;
  setPriceRange: (min: number | null, max: number | null) => void;
  setCity: (city: string | null) => void;
  setDates: (checkIn: string | null, checkOut: string | null) => void;
  setGuests: (guests: number) => void;
  resetFilters: () => void;
}

const defaultFilters: FilterState = {
  category: null,
  minPrice: null,
  maxPrice: null,
  city: null,
  checkIn: null,
  checkOut: null,
  guests: 1,
};

export const useFilterStore = create<FilterStoreState>()(
  persist(
    (set) => ({
      ...defaultFilters,
      setCategory: (category) => set({ category }),
      setPriceRange: (minPrice, maxPrice) => set({ minPrice, maxPrice }),
      setCity: (city) => set({ city }),
      setDates: (checkIn, checkOut) => set({ checkIn, checkOut }),
      setGuests: (guests) => set({ guests }),
      resetFilters: () => set(defaultFilters),
    }),
    {
      name: 'filter-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
