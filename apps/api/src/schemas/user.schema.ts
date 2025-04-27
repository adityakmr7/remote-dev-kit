import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().optional(),
  avatarUrl: z.string().url("Avatar URL must be a valid URL").optional(),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z
    .string()
    .min(6, "New password must be at least 6 characters long"),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
