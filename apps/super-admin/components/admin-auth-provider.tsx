"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { adminAuthApi } from "@repo/lib/admin-api";
import { toast } from "sonner";

type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type AdminAuthContextType = {
  user: AdminUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined,
);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if we have a token
        const token = localStorage.getItem("admin_token");
        if (!token) {
          setIsLoading(false);
          if (pathname !== "/admin/login" && pathname?.startsWith("/admin")) {
            router.push("/admin/login");
          }
          return;
        }

        // Validate token
        const { valid, user } = await adminAuthApi.validateToken();
        if (valid && user) {
          setUser(user);
          if (pathname === "/admin/login") {
            router.push("/admin/dashboard");
          }
        } else {
          // Token is invalid
          localStorage.removeItem("admin_token");
          localStorage.removeItem("admin_refresh_token");
          if (pathname !== "/admin/login" && pathname?.startsWith("/admin")) {
            router.push("/admin/login");
          }
        }
      } catch (error) {
        console.error("Auth check error:", error);
        if (pathname !== "/admin/login" && pathname?.startsWith("/admin")) {
          router.push("/admin/login");
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [pathname, router]);

  const login = async (email: string, password: string) => {
    // @ts-ignore
    try {
      setIsLoading(true);
      const { user, accessToken, refreshToken } = await adminAuthApi.login(
        email,
        password,
      );

      localStorage.setItem("admin_token", accessToken);
      localStorage.setItem("admin_refresh_token", refreshToken);

      setUser(user);
      router.push("/admin/dashboard");

      toast("Login successful", {
        description: `Welcome back, ${user.name}!`,
      });
    } catch (error: any) {
      console.error("Login error:", error);
      toast("Login failed", {
        description: error.response?.data?.message || "Invalid credentials",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await adminAuthApi.logout();
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_refresh_token");
      setUser(null);
      router.push("/admin/login");
      toast("Logged out", {
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminAuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
};
