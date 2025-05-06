import express from "express";
import {
  changePassword,
  completeOnboarding,
  getCurrentUser,
  onboardingProgress,
  updateOnboardingProgress,
  updateProfile,
  updateWorkspaceSettings,
} from "../controllers/user.controller";
import { validate } from "../middleware/validation.middleware";
import {
  changePasswordSchema,
  completeOnboardingSchema,
  updateProfileSchema,
  updateWorkspaceSettingsSchema,
} from "../schemas/user.schema";
import { authenticate } from "../middleware/auth.middleware";

const router = express.Router();

// Get current user
router.get("/me", authenticate, getCurrentUser);

// Update profile
router.put(
  "/profile",
  authenticate,
  validate(updateProfileSchema),
  updateProfile,
);

// Change password
router.put(
  "/change-password",
  authenticate,
  validate(changePasswordSchema),
  changePassword,
);
// Update workspace settings
router.put(
  "/workspace-settings",
  authenticate,
  validate(updateWorkspaceSettingsSchema),
  updateWorkspaceSettings,
);

// Complete onboarding
router.post(
  "/complete-onboarding",
  authenticate,
  validate(completeOnboardingSchema),
  completeOnboarding,
);

router.get("/onboarding-progress", authenticate, onboardingProgress);
router.put("/onboarding-progress", authenticate, updateOnboardingProgress);

export default router;
