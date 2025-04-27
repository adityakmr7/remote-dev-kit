import express from "express";
import {
  getActivePairSessions,
  getDashboardStats,
  getTeamMembers,
  getTodayStandups,
} from "../controllers/dashboard.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = express.Router();

// All dashboard routes require authentication
router.use(authenticate);

// Get dashboard statistics
router.get("/stats", getDashboardStats);

// Get today's standups
router.get("/standups/today", getTodayStandups);

// Get active pair programming sessions
router.get("/pair-sessions/active", getActivePairSessions);

// Get team members
router.get("/team-members", getTeamMembers);

export default router;
