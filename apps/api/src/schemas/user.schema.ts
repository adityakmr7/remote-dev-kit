import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().optional(),
  avatarUrl: z.string().url("Avatar URL must be a valid URL").optional(),
  jobTitle: z.string().optional(),
  bio: z.string().optional(),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z
    .string()
    .min(6, "New password must be at least 6 characters long"),
});

export const updateWorkspaceSettingsSchema = z.object({
  defaultEditor: z
    .enum(["vscode", "intellij", "webstorm", "pycharm"])
    .optional(),
  theme: z.enum(["light", "dark", "system"]).optional(),
  fontSize: z.number().min(8).max(24).optional(),
  tabSize: z.number().min(2).max(8).optional(),
  autoSave: z.boolean().optional(),
});

export const completeOnboardingSchema = z.object({
  skipRemaining: z.boolean().optional(),
});
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type UpdateWorkspaceSettingsInput = z.infer<
  typeof updateWorkspaceSettingsSchema
>;
export type CompleteOnboardingInput = z.infer<typeof completeOnboardingSchema>;
