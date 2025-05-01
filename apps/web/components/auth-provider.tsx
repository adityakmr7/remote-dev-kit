"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { getSession, logout } from "@repo/lib/auth";
import apiClient from "../../../packages/lib/src/api-client";

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
        setLoading(true);
        // First check if we have a session cookie
        const session = await getSession();

        if (session) {
          console.log("Session found:", session);
          setUser(session);
        } else {
          console.log("No session cookie, checking for tokens");
          // If no session cookie but we have tokens, try to get user data from API
          const accessToken = localStorage.getItem("accessToken");

          if (accessToken) {
            try {
              console.log("Access token found, fetching user data");
              const response = await apiClient.get("/users/me");
              console.log("User data fetched:", response.data);
              setUser(response.data.user);

              // Also update the session cookie
              // This is a workaround to ensure server and client auth are in sync
              const userInfo = {
                id: response.data.user.id,
                name: response.data.user.name,
                email: response.data.user.email,
              };

              // We can't directly set cookies from client, but we can call a server action
              // This is a placeholder - you would need to implement this server action
              // await updateSession(userInfo);
            } catch (error) {
              console.error("Failed to fetch user data:", error);
              // If API call fails, clear tokens
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              setUser(null);
            }
          } else {
            console.log("No access token found");
            setUser(null);
          }
        }
      } catch (error) {
        console.error("Session check error:", error);
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
