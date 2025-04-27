import express from "express";
import {
  changePassword,
  getCurrentUser,
  updateProfile,
} from "../controllers/user.controller";
import { validate } from "../middleware/validation.middleware";
import {
  changePasswordSchema,
  updateProfileSchema,
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

export default router;
