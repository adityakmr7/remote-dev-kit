"use server";

import { cookies } from "next/headers";
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
  };
  accessToken: string;
  refreshToken: string;
}

interface AuthResult {
  success: boolean;
  user?: {
    id: string;
    name: string | null;
    email: string;
  };
  error?: string;
  accessToken?: string;
  refreshToken?: string;
}

// Register a new user
export async function register(
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

    // Set cookies for server-side auth check
    const cookieStore = await cookies();
    cookieStore.set(
      "session",
      JSON.stringify({ id: user.id, name: user.name, email: user.email }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      },
    );

    // Return tokens to be stored in localStorage by the client
    return {
      success: true,
      user: { id: user.id, name: user.name, email: user.email },
      // We'll pass these back to the client component to store in localStorage
      accessToken,
      refreshToken,
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

// Login a user
export async function login(
  email: string,
  password: string,
): Promise<AuthResult> {
  try {
    const response = await apiClient.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    const { user, accessToken, refreshToken } = response.data;

    // Set cookies for server-side auth check
    const cookieStore = await cookies();
    cookieStore.set(
      "session",
      JSON.stringify({ id: user.id, name: user.name, email: user.email }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      },
    );

    // Return tokens to be stored in localStorage by the client
    return {
      success: true,
      user: { id: user.id, name: user.name, email: user.email },
      // We'll pass these back to the client component to store in localStorage
      accessToken,
      refreshToken,
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

// Logout a user
export async function logout(): Promise<{ success: boolean }> {
  try {
    // Call the backend logout endpoint
    await apiClient.post("/auth/logout");

    // Clear the session cookie
    const cookieStore = await cookies();
    cookieStore.delete("session");

    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return { success: true }; // Still return success as we've cleared the cookie
  }
}

// Get the current session
export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (!session) {
    return null;
  }

  try {
    return JSON.parse(session.value);
  } catch (error) {
    return null;
  }
}

// Check if the user is authenticated
export async function isAuthenticated() {
  const session = await getSession();
  return !!session;
}

// Request password reset
export async function forgotPassword(
  email: string,
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const response = await apiClient.post("/auth/forgot-password", { email });
    return { success: true, message: response.data.message };
  } catch (error: any) {
    return {
      success: false,
      error:
        error.response?.data?.error?.message ||
        "Failed to send reset email. Please try again.",
    };
  }
}

// Reset password with token
export async function resetPassword(
  token: string,
  password: string,
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const response = await apiClient.post("/auth/reset-password", {
      token,
      password,
    });
    return { success: true, message: response.data.message };
  } catch (error: any) {
    return {
      success: false,
      error:
        error.response?.data?.error?.message ||
        "Failed to reset password. Please try again.",
    };
  }
}
