import { z } from "zod";

export const createTeamSchema = z.object({
  name: z.string().min(1, "Team name is required"),
  description: z.string().optional(),
  visibility: z.enum(["private", "organization", "public"]).default("private"),
});

export const updateTeamSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  visibility: z.enum(["private", "organization", "public"]).optional(),
});

export const addTeamMemberSchema = z.object({
  email: z.string().email("Please provide a valid email"),
  role: z.enum(["ADMIN", "MEMBER", "MANAGER"]).default("MEMBER"),
});

export type CreateTeamInput = z.infer<typeof createTeamSchema>;
export type UpdateTeamInput = z.infer<typeof updateTeamSchema>;
export type AddTeamMemberInput = z.infer<typeof addTeamMemberSchema>;
