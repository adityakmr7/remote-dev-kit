"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { getSession, logout } from "@/lib/auth";
import apiClient from "@/lib/api-client";

type User = {
  id: string;
  name: string | null;
  email: string;
} | null;

type AuthContextType = {
  user: User;
  loading: boolean;
  logout: () => Promise<void>;
  setUser: (user: User) => void;
  storeTokens: (accessToken: string, refreshToken: string) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: async () => {},
  setUser: () => {},
  storeTokens: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Store tokens in localStorage (client-side only)
  const storeTokens = (accessToken: string, refreshToken: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }
  };

  // Check for existing session on mount and route changes
  useEffect(() => {
    const checkSession = async () => {
      try {
        // First check if we have a session cookie
        const session = await getSession();

        if (session) {
          setUser(session);
        } else {
          // If no session cookie but we have tokens, try to get user data from API
          const accessToken = localStorage.getItem("accessToken");

          if (accessToken) {
            try {
              const response = await apiClient.get("/users/me");
              setUser(response.data.user);
            } catch (error) {
              // If API call fails, clear tokens
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              setUser(null);
            }
          } else {
            setUser(null);
          }
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [pathname]);

  const handleLogout = async () => {
    await logout();

    // Clear client-side tokens
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }

    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout: handleLogout,
        setUser,
        storeTokens,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
