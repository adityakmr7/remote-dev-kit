"use client";

import type React from "react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./auth-provider";

/**
 * List of public routes that don't require authentication.
 * Users can access these routes whether they are logged in or not.
 */
const publicRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

/**
 * ProtectedRoute component - Handles authentication-based routing logic
 *
 * This component wraps around pages to control access based on authentication status.
 * It redirects users based on their authentication state, onboarding status,
 * and the route they're trying to access.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if access is granted
 */
export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Don't perform any redirects while authentication state is still loading
    if (loading) return;

    // Check if the current route is in the public routes list
    const isPublicRoute = publicRoutes.some((route) =>
      pathname.startsWith(route),
    );

    // --- Handle different routing scenarios based on authentication and current path ---

    if (!isAuthenticated && !isPublicRoute) {
      // Scenario 1: User is not authenticated and trying to access a protected route
      // Action: Redirect to login page
      router.push("/login");
    }
    else if (isAuthenticated && isPublicRoute && user?.onboardingCompleted) {
      // Scenario 2: User is authenticated but trying to access a public route (like login)
      // and has completed onboarding
      // Action: Redirect to home page
      router.push("/");
    }
    else if (isAuthenticated && pathname === "/" && user?.onboardingCompleted) {
      // Scenario 3: Authenticated user with completed onboarding accessing root path
      // Action: Redirect to the home page (redundant since already at "/")
      router.push("/");
    }
    else if (isAuthenticated && user && !user.onboardingCompleted) {
      // Scenario 4: User is authenticated but hasn't completed onboarding
      // Action: Redirect to onboarding flow
      // Note: The commented out condition would check if user is not already on onboarding page
      // !pathname.startsWith("/onboarding")
      router.push("/onboarding");
    }
    else if (
      isAuthenticated &&
      user &&
      user.onboardingCompleted &&
      pathname.startsWith("/onboarding")
    ) {
      // Scenario 5: User has completed onboarding but is trying to access onboarding pages again
      // Action: Redirect to dashboard
      router.push("/dashboard");
    }
    // If none of the conditions above are met, allow access to the current route
  }, [isAuthenticated, loading, pathname, router, user]); // Re-run when these dependencies change

  /**
   * Display a loading spinner while authentication state is being determined
   * This prevents a flash of unauthorized content or premature redirects
   */
  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  // Render children once authentication checks are complete
  return <>{children}</>;
}
