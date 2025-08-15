import express from "express";
import {
  forgotPassword,
  githubCallback,
  login,
  logout,
  refreshToken,
  register,
  resendVerificationEmail,
  resetPassword,
  verifyEmail,
} from "../controllers/auth.controller";
import { githubAuth } from "../controllers/github.controller";
import { validate } from "../middleware/validation.middleware";
import {
  forgotPasswordSchema,
  githubAuthSchema,
  githubCallbackSchema,
  loginSchema,
  refreshTokenSchema,
  registerSchema,
  resetPasswordSchema,
  verifyEmailSchema,
} from "../schemas/auth.schema";
import { authenticate } from "../middleware/auth.middleware";
import { prismaClient } from "@repo/db/client";

const router = express.Router();

// Register
router.post("/register", validate(registerSchema), register);

// Login
router.post("/login", validate(loginSchema), login);

// GitHub authentication
router.post("/github", validate(githubAuthSchema), githubAuth);

// Refresh token
router.post("/refresh-token", validate(refreshTokenSchema), refreshToken);

// Forgot password
router.post("/forgot-password", validate(forgotPasswordSchema), forgotPassword);

// Reset password
router.post("/reset-password", validate(resetPasswordSchema), resetPassword);
router.post("/verify-email", validate(verifyEmailSchema), verifyEmail);
router.post("/resend-verification", authenticate, resendVerificationEmail);
// Logout
router.post("/logout", logout);

router.post("/github/callback", validate(githubCallbackSchema), githubCallback);
// Add a token validation endpoint
router.get("/validate", authenticate, async (req, res) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ error: { message: "User not found in request" } });
    }

    // Get full user data
    const user = await prismaClient.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        email: true,
        name: true,
        avatarUrl: true,
        onboardingCompleted: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return res.status(401).json({ error: { message: "User not found" } });
    }

    res.status(200).json({ 
      valid: true, 
      user: user 
    });
  } catch (error) {
    console.error("Validate endpoint error:", error);
    res.status(500).json({ error: { message: "Internal server error" } });
  }
});
export default router;
