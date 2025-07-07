import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BandcampItem {
  id: string;
  title: string;
  artist: string;
  type: 'album' | 'track';
  price?: number;
  currency?: string;
  dateAdded: string;
  bandcampUrl: string;
}

interface BandcampData {
  collection: BandcampItem[];
  wishlist: BandcampItem[];
  lastUpdated: string;
}

interface BandcampState {
  userBandcampData: { [userId: string]: BandcampData };
  loading: boolean;
  error: string | null;
}

const initialState: BandcampState = {
  userBandcampData: {},
  loading: false,
  error: null,
};

const bandcampSlice = createSlice({
  name: 'bandcamp',
  initialState,
  reducers: {
    setBandcampData: (state, action: PayloadAction<{ userId: string; data: BandcampData }>) => {
      state.userBandcampData[action.payload.userId] = action.payload.data;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearBandcampData: (state, action: PayloadAction<string>) => {
      delete state.userBandcampData[action.payload];
    },
  },
});

export const {
  setBandcampData,
  setLoading,
  setError,
  clearBandcampData
} = bandcampSlice.actions;
export default bandcampSlice.reducer;
