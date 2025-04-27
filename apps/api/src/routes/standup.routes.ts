// apps/api/src/routes/standup.routes.ts
import { Router } from "express";
import {
  createStandup,
  getTeamStandups,
  getUserStandupHistory,
} from "../controllers/standup.controller";
import { authenticate } from "../middleware/auth.middleware.ts";

const router = Router();

// Create a new standup
router.post('/', authenticate, createStandup);

// Get team's standups for today
router.get('/team/:teamId', authenticate, getTeamStandups);

// Get user's standup history (with pagination)
router.get('/user/:userId/history', authenticate, getUserStandupHistory);

export default router;
