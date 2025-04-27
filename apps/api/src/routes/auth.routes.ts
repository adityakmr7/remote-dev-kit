import express from "express";
import {
  forgotPassword,
  login,
  logout,
  refreshToken,
  register,
  resetPassword,
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
} from "../schemas/auth.schema";

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

// Logout
router.post("/logout", logout);

export default router;
