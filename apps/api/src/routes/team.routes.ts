import express from "express";
import {
  addTeamMember,
  createTeam,
  deleteTeam,
  getMyTeams,
  getTeamById,
  getTeamInvitations,
  removeTeamMember,
  updateTeam,
  updateTeamMemberRole,
} from "../controllers/team.controller";
import { authenticate } from "../middleware/auth.middleware";
import { validate } from "../middleware/validation.middleware";
import {
  addTeamMemberSchema,
  createTeamSchema,
  updateTeamSchema,
} from "../schemas/team.schema";

const router = express.Router();

// All team routes require authentication
router.use(authenticate);

// Get all teams for the current user
router.get("/", getMyTeams);

// Get team invitations
router.get("/invitations", getTeamInvitations);

// Get team by ID
router.get("/:id", getTeamById);

// Create a new team
router.post("/", validate(createTeamSchema), createTeam);

// Update a team
router.put("/:id", validate(updateTeamSchema), updateTeam);

// Delete a team
router.delete("/:id", deleteTeam);

// Add a member to a team
router.post("/:id/members", validate(addTeamMemberSchema), addTeamMember);

// Remove a member from a team
router.delete("/:id/members/:memberId", removeTeamMember);

// Update a team member's role
router.put("/:id/members/:memberId", updateTeamMemberRole);

export default router;
