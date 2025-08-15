"use client";

import apiClient from "./api-client";

// Types
interface AuthResponse {
  user: {
    id: string;
    name: string | null;
    email: string;
    avatarUrl: string | null;
    provider: "email" | "github";
    createdAt: string;
    onboardingCompleted: boolean;
  };
  accessToken: string;
  refreshToken: string;
  message?: string;
}

interface AuthResult {
  success: boolean;
  user?: {
    id: string;
    name: string | null;
    email: string;
    onboardingCompleted: boolean;
  };
  error?: string;
  message?: string;
}

// Register a new user (client-side)
export async function registerUser(
  name: string,
  email: string,
  password: string,
): Promise<AuthResult> {
  try {
    const response = await apiClient.post<AuthResponse>("/auth/register", {
      name,
      email,
      password,
    });

    console.log("Registration response:", response.data);

    const { user, accessToken, refreshToken } = response.data;

    // Store tokens in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }

    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        onboardingCompleted: user.onboardingCompleted,
      },
      message: response.data.message,
    };
  } catch (error: any) {
    console.error("Registration error:", error.response?.data || error.message);
    return {
      success: false,
      error:
        error.response?.data?.error?.message ||
        "Registration failed. Please try again.",
    };
  }
}

// Login a user (client-side)
export async function loginUser(
  email: string,
  password: string,
): Promise<AuthResult> {
  try {
    const response = await apiClient.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    const { user, accessToken, refreshToken } = response.data;

    // Store tokens in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }

    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        onboardingCompleted: user.onboardingCompleted,
      },
      message: response.data.message,
    };
  } catch (error: any) {
    console.error("Login error:", error.response?.data || error.message);
    return {
      success: false,
      error:
        error.response?.data?.error?.message || "Invalid email or password",
    };
  }
}

// Logout a user (client-side)
export function logoutUser(): Promise<{ success: boolean }> {
  try {
    // Clear tokens from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }

    return Promise.resolve({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return Promise.resolve({ success: true });
  }
}

// Get current user from token
export async function getCurrentUser(): Promise<AuthResult> {
  try {
    const response = await apiClient.get("/auth/validate");
    
    if (response.data && response.data.user) {
      return {
        success: true,
        user: {
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          onboardingCompleted: response.data.user.onboardingCompleted,
        },
      };
    }
    
    return {
      success: false,
      error: "Invalid user data",
    };
  } catch (error: any) {
    console.error("Get current user error:", error);
    return {
      success: false,
      error: error.response?.data?.error?.message || "Not authenticated",
    };
  }
}

// Check if user is authenticated (client-side)
export function isUserAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  
  const token = localStorage.getItem("accessToken");
  return !!token;
}