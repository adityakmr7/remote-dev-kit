import express from "express";
import { authenticate, isAdmin } from "../middleware/auth.middleware";
import {
  createOrganization,
  createUser,
  deleteOrganization,
  deleteUser,
  getDashboardStats,
  getOrganizationById,
  getOrganizations,
  getUserById,
  getUsers,
  login,
  logout,
  refreshToken,
  registerSuperAdmin,
  updateOrganization,
  updateUser,
  validateToken,
} from "../controllers/admin.controller";

const router = express.Router();

// Auth routes
router.post("/auth/login", login);
router.post("/auth/register-super-admin", registerSuperAdmin);
router.post("/auth/refresh-token", refreshToken);
router.post("/auth/logout", logout);
router.get("/auth/validate", authenticate, isAdmin, validateToken);

// Organization routes
router.get("/organizations", authenticate, isAdmin, getOrganizations);
router.get("/organizations/:id", authenticate, isAdmin, getOrganizationById);
router.post("/organizations", authenticate, isAdmin, createOrganization);
router.put("/organizations/:id", authenticate, isAdmin, updateOrganization);
router.delete("/organizations/:id", authenticate, isAdmin, deleteOrganization);

// User routes
router.get("/users", authenticate, isAdmin, getUsers);
router.get("/users/:id", authenticate, isAdmin, getUserById);
router.post("/users", authenticate, isAdmin, createUser);
router.put("/users/:id", authenticate, isAdmin, updateUser);
router.delete("/users/:id", authenticate, isAdmin, deleteUser);

// Dashboard routes
router.get("/dashboard/stats", authenticate, isAdmin, getDashboardStats);

export default router;
