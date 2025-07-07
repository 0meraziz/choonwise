import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import groupSlice from './slices/groupSlice';
import bandcampSlice from './slices/bandcampSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    groups: groupSlice,
    bandcamp: bandcampSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
