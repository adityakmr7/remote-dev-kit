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
import { hasTeamPermission } from "../middleware/permission.middleware.ts";
import { TeamPermission } from "@repo/lib/types/permissions";

const router = express.Router();

// All team routes require authentication
router.use(authenticate);

// Get all teams for the current user
router.get("/", getMyTeams);

// Get team by ID
router.get("/:id", getTeamById);

// Create a new team
router.post("/", validate(createTeamSchema), createTeam);

// Update a team
router.put(
  "/:id",
  validate(updateTeamSchema),
  hasTeamPermission(TeamPermission.EDIT_TEAM_SETTINGS),
  updateTeam,
);

// Delete a team
router.delete(
  "/:id",
  hasTeamPermission(TeamPermission.DELETE_TEAM),
  deleteTeam,
);

// Invite a user to a team
router.post("/:id/invite", validate(inviteToTeamSchema), inviteToTeam);

// Add a member to a team
router.post(
  "/:id/members",
  validate(addTeamMemberSchema),
  hasTeamPermission(TeamPermission.INVITE_MEMBERS),
  addTeamMember,
);

// Remove a member from a team
router.delete(
  "/:id/members/:memberId",
  hasTeamPermission(TeamPermission.REMOVE_MEMBERS),
  removeTeamMember,
);

// Update a team member's role
router.put(
  "/:id/members/:memberId",
  hasTeamPermission(TeamPermission.MANAGE_MEMBER_ROLES),
  updateTeamMemberRole,
);
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
export default router;
