import { z } from "zod";
import { TeamRole } from "@repo/lib/types/permissions";

export const createTeamSchema = z.object({
  name: z.string().min(1, "Team name is required"),
  description: z.string().optional(),
  visibility: z.enum(["private", "organization", "public"]).default("private"),
  organizationId: z.string().optional(),
});

export const updateTeamSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  visibility: z.enum(["private", "organization", "public"]).optional(),
});

export const addTeamMemberSchema = z.object({
  email: z.string().email("Please provide a valid email"),
  role: z.nativeEnum(TeamRole).default(TeamRole.MEMBER),
});

export const inviteToTeamSchema = z.object({
  email: z.string().email("Please provide a valid email"),
  role: z.nativeEnum(TeamRole).default(TeamRole.MEMBER),
});

export const respondToInvitationSchema = z.object({
  status: z.enum(["ACCEPTED", "DECLINED"]),
});

export const updateTeamMemberRoleSchema = z.object({
  role: z.nativeEnum(TeamRole),
});

export type CreateTeamInput = z.infer<typeof createTeamSchema>;
export type UpdateTeamInput = z.infer<typeof updateTeamSchema>;
export type AddTeamMemberInput = z.infer<typeof addTeamMemberSchema>;
export type InviteToTeamInput = z.infer<typeof inviteToTeamSchema>;
export type RespondToInvitationInput = z.infer<
  typeof respondToInvitationSchema
>;
export type UpdateTeamMemberRoleInput = z.infer<
  typeof updateTeamMemberRoleSchema
>;
