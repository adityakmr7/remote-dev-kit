"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { getCurrentUser, isUserAuthenticated, logoutUser } from "@repo/lib/client-auth";
import type { User } from "@repo/lib/types/index";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  logout: async () => {},
  refreshUser: async () => {},
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Fetch user session from API using stored tokens
  const fetchSession = async () => {
    try {
      // First check if user is authenticated (has valid tokens)
      if (!isUserAuthenticated()) {
        setUser(null);
        return false;
      }

      // Get current user from API
      const result = await getCurrentUser();
      
      if (result.success && result.user) {
        setUser(result.user as User);
        return true;
      } else {
        // Token might be expired or invalid
        setUser(null);
        // Clear invalid tokens
        await logoutUser();
        return false;
      }
    } catch (error) {
      console.error("Failed to fetch session:", error);
      setUser(null);
      await logoutUser();
      return false;
    }
  };

  // Refresh user data
  const refreshUser = async () => {
    setLoading(true);
    await fetchSession();
    setLoading(false);
  };

  // Check for existing session on mount and route changes
  useEffect(() => {
    const checkSession = async () => {
      setLoading(true);
      await fetchSession();
      setLoading(false);
    };

    checkSession();
  }, [pathname]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout. Please try again.");

      // Even if logout fails, clear local state
      setUser(null);
      router.push("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        logout: handleLogout,
        refreshUser,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
