"use client";

import type React from "react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./auth-provider";

// Public routes that don't require authentication
const publicRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;

    const isPublicRoute = publicRoutes.some((route) =>
      pathname.startsWith(route),
    );

    console.log("protected-route", {
      isPublicRoute,
      isAuthenticated,
      pathname,
    });
    if (!isAuthenticated && !isPublicRoute) {
      // Not authenticated and trying to access protected route
      router.push("/login");
    } else if (isAuthenticated && isPublicRoute) {
      // Authenticated but trying to access public route (like login)
      router.push("/");
    } else if (isAuthenticated && pathname === "/") {
      // Redirect root to dashboard for authenticated users
      router.push("/");
    } else if (
      isAuthenticated &&
      user &&
      !user.onboardingCompleted &&
      !pathname.startsWith("/onboarding")
    ) {
      // Authenticated but onboarding not completed
      router.push("/onboarding");
    } else if (
      isAuthenticated &&
      user &&
      user.onboardingCompleted &&
      pathname.startsWith("/onboarding")
    ) {
      // Onboarding completed but trying to access onboarding pages
      router.push("/dashboard");
    }
  }, [isAuthenticated, loading, pathname, router, user]);

  // Show loading state
  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return <>{children}</>;
}
