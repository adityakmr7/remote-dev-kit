"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { getSession, logout } from "@repo/lib/auth";
import type { User } from "@repo/lib/types/index";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  logout: async () => {},
  refreshUser: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Fetch user session
  const fetchSession = async () => {
    try {
      const session = await getSession();

      if (session) {
        setUser(session);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Failed to fetch session:", error);
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
      await logout();
      setUser(null);
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout. Please try again.");

      // Even if the server logout fails, clear local state
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
