import apiClient from "./api-client";
import type { OnboardingProgress, User, WorkspaceSettings } from "./types";

// Get current user profile
export async function getCurrentUser(): Promise<User | null> {
  try {
    const response = await apiClient.get("/users/me");
    return response.data.user;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}

// Update profile
export async function updateProfile(data: {
  name?: string;
  avatarUrl?: string;
  bio?: string;
  jobTitle?: string;
}): Promise<User | null> {
  try {
    const response = await apiClient.put("/users/profile", data);
    console.log("Updated profile:", response.data.user);
    return response.data.user;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
}

// Update workspace settings
export async function updateWorkspaceSettings(
  data: WorkspaceSettings,
): Promise<User | null> {
  try {
    const response = await apiClient.put("/users/workspace-settings", data);
    return response.data.user;
  } catch (error) {
    console.error("Error updating workspace settings:", error);
    throw error;
  }
}

// Complete onboarding
export async function completeOnboarding(
  data: { skipRemaining?: boolean } = {},
): Promise<User | null> {
  try {
    const response = await apiClient.post("/users/complete-onboarding", data);
    return response.data.user;
  } catch (error) {
    console.error("Error completing onboarding:", error);
    throw error;
  }
}

export async function getSavedOnboardingProgress(): Promise<{ onboardingProgress: OnboardingProgress, onboardingCompleted: boolean, } | null> {
  try {
    const response = await apiClient.get("/users/onboarding-progress");
    return response.data;
  } catch (error) {
    console.error("Error fetching onboarding progress:", error);
    throw error;
  }
}

export async function saveOnboardingProgress(
  data: OnboardingProgress,
): Promise<{
  onboardingProgress: OnboardingProgress;
} | null> {
  try {
    const response = await apiClient.put("/users/onboarding-progress", { progress: data });
    return response.data;
  } catch (error) {
    console.error("Error fetching onboarding progress:", error);
    throw error;
  }
}

// Change password
export async function changePassword(data: {
  currentPassword: string;
  newPassword: string;
}): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const response = await apiClient.put("/users/change-password", data);
    return { success: true, message: response.data.message };
  } catch (error: any) {
    console.error("Error changing password:", error);
    return {
      success: false,
      error:
        error.response?.data?.error?.message || "Failed to change password",
    };
  }
}

// Delete account
export async function deleteAccount(): Promise<{
  success: boolean;
  message?: string;
  error?: string;
}> {
  try {
    const response = await apiClient.delete("/users/account");
    return { success: true, message: response.data.message };
  } catch (error: any) {
    console.error("Error deleting account:", error);
    return {
      success: false,
      error: error.response?.data?.error?.message || "Failed to delete account",
    };
  }
}
