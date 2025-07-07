// User types
export interface User {
  id: string;
  email: string;
  bandcampUsername?: string;
  createdAt: string;
  updatedAt: string;
}

// Group types
export interface Group {
  id: string;
  name: string;
  ownerId: string;
  members: GroupMember[];
  createdAt: string;
  updatedAt: string;
}

export interface GroupMember {
  id: string;
  userId: string;
  groupId: string;
  role: 'OWNER' | 'MEMBER';
  user: User;
  joinedAt: string;
}

// Bandcamp types
export interface BandcampItem {
  id: string;
  bandcampId: string;
  title: string;
  artist: string;
  type: 'ALBUM' | 'TRACK';
  bandcampUrl: string;
  dateAdded: string;
  price?: number;
  currency?: string;
}

export interface BandcampCollection extends BandcampItem {
  userId: string;
}

export interface BandcampWishlist extends BandcampItem {
  userId: string;
  price?: number;
  currency?: string;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Analysis types
export interface GroupAnalysis {
  commonItems: BandcampItem[];
  sharingOpportunities: SharingOpportunity[];
  purchaseOptimizations: PurchaseOptimization[];
}

export interface SharingOpportunity {
  item: BandcampItem;
  owner: User;
  interestedUsers: User[];
}

export interface PurchaseOptimization {
  item: BandcampItem;
  interestedUsers: User[];
  totalPrice: number;
  pricePerUser: number;
  suggestedBuyer: User;
}
