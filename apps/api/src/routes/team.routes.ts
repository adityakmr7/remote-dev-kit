// apps/api/src/routes/team.routes.ts
import { Router } from "express";
import {
  addTeamMember,
  createTeam,
  getTeam,
  getTeamStatistics,
  getUserTeam,
  removeTeamMember,
  updateTeam,
} from "../controllers/team.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

// Create a new team
router.post('/', authenticate, createTeam);

// Get all teams of the user
router.get('/', authenticate, getUserTeam);

// Get team details
router.get('/:teamId', authenticate, getTeam);

// Get team statistics
router.get('/:teamId/statistics', authenticate, getTeamStatistics);

// Update team
router.put('/:teamId', authenticate, updateTeam);

// Add member to team
router.post('/:teamId/members', authenticate, addTeamMember);

// Remove member from team
router.delete('/:teamId/members/:userId', authenticate, removeTeamMember);

export default router;
