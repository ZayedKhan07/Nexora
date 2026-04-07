import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  userRole: 'patient' | 'provider' | null;
  login: () => void;
  logout: () => void;
  selectRole: (role: 'patient' | 'provider') => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userRole: null,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false, userRole: null }),
  selectRole: (role) => set({ userRole: role }),
}));
