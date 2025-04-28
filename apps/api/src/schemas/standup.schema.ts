import { z } from "zod";

export const createStandupSchema = z.object({
  body: z.object({
    yesterday: z.string().optional().nullable(),
    today: z.string().optional().nullable(),
    blockers: z.string().optional().nullable(),
    tags: z.array(z.string()).optional(),
    audioUrl: z.string().optional().nullable(),
    teamId: z.string().optional(),
  }),
});

export const updateStandupSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
  body: z.object({
    yesterday: z.string().optional().nullable(),
    today: z.string().optional().nullable(),
    blockers: z.string().optional().nullable(),
    tags: z.array(z.string()).optional(),
    audioUrl: z.string().optional().nullable(),
  }),
});

export type CreateStandupInput = z.infer<typeof createStandupSchema>["body"];
export type UpdateStandupInput = z.infer<typeof updateStandupSchema>["body"];
