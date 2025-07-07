import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Group {
  id: string;
  name: string;
  ownerId: string;
  members: GroupMember[];
  createdAt: string;
}

interface GroupMember {
  userId: string;
  email: string;
  bandcampUsername?: string;
  role: 'owner' | 'member';
}

interface GroupState {
  groups: Group[];
  currentGroup: Group | null;
  loading: boolean;
  error: string | null;
}

const initialState: GroupState = {
  groups: [],
  currentGroup: null,
  loading: false,
  error: null,
};

const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setGroups: (state, action: PayloadAction<Group[]>) => {
      state.groups = action.payload;
    },
    setCurrentGroup: (state, action: PayloadAction<Group>) => {
      state.currentGroup = action.payload;
    },
    addGroup: (state, action: PayloadAction<Group>) => {
      state.groups.push(action.payload);
    },
    updateGroup: (state, action: PayloadAction<Group>) => {
      const index = state.groups.findIndex(group => group.id === action.payload.id);
      if (index !== -1) {
        state.groups[index] = action.payload;
      }
      if (state.currentGroup?.id === action.payload.id) {
        state.currentGroup = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setGroups,
  setCurrentGroup,
  addGroup,
  updateGroup,
  setLoading,
  setError
} = groupSlice.actions;
export default groupSlice.reducer;
