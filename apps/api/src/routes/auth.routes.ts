import express from "express";
import {
  forgotPassword,
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
  loginSchema,
  refreshTokenSchema,
  registerSchema,
  resetPasswordSchema,
  verifyEmailSchema,
} from "../schemas/auth.schema";
import { authenticate } from "../middleware/auth.middleware";

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
// Add a token validation endpoint
router.get("/validate", authenticate, (req, res) => {
  res.status(200).json({ valid: true });
});
export default router;
