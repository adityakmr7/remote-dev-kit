import express from "express";
import {
  addTeamMember,
  createTeam,
  deleteTeam,
  getMyTeams,
  getTeamById,
  getTeamInvitation,
  getTeamInvitations,
  inviteToTeam,
  removeTeamMember,
  respondToInvitation,
  updateTeam,
  updateTeamMemberRole,
} from "../controllers/team.controller";
import { authenticate } from "../middleware/auth.middleware";
import { validate } from "../middleware/validation.middleware";
import {
  addTeamMemberSchema,
  createTeamSchema,
  inviteToTeamSchema,
  respondToInvitationSchema,
  updateTeamSchema,
} from "../schemas/team.schema";

const router = express.Router();

// All team routes require authentication
router.use(authenticate);

// Get all teams for the current user
router.get("/", getMyTeams);

// Get team invitations for the current user
router.get("/invitations", getTeamInvitations);

// Get a specific team invitation
router.get("/invitations/:id", getTeamInvitation);

// Respond to a team invitation (accept or decline)
router.post(
  "/invitations/:id/respond",
  validate(respondToInvitationSchema),
  respondToInvitation,
);

// Get team by ID
router.get("/:id", getTeamById);

// Create a new team
router.post("/", validate(createTeamSchema), createTeam);

// Update a team
router.put("/:id", validate(updateTeamSchema), updateTeam);

// Delete a team
router.delete("/:id", deleteTeam);

// Invite a user to a team
router.post("/:id/invite", validate(inviteToTeamSchema), inviteToTeam);

// Add a member to a team
router.post("/:id/members", validate(addTeamMemberSchema), addTeamMember);

// Remove a member from a team
router.delete("/:id/members/:memberId", removeTeamMember);

// Update a team member's role
router.put("/:id/members/:memberId", updateTeamMemberRole);

export default router;
