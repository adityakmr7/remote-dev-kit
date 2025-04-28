import express from "express";
import {
  createStandup,
  deleteStandup,
  getMyStandups,
  getStandupById,
  getStandupHistory,
  getStandupsByDate,
  getTodayStandups,
  updateStandup,
} from "../controllers/standup.controller";
import {
  createStandupSchema,
  updateStandupSchema,
} from "../schemas/standup.schema";
import { validate } from "../middleware/validation.middleware.ts";
import { authenticate } from "../middleware/auth.middleware.ts";

const router = express.Router();

// All standup routes require authentication
router.use(authenticate);

// Create a new standup
router.post("/", validate(createStandupSchema), createStandup);

// Get standup by ID
router.get("/standup/:id", getStandupById);

// Get today's standups for the user's team
router.get("/today", getTodayStandups);

// Get standups by specific date
router.get("/date/:date", getStandupsByDate);

// TODO: check history is not working.
// Get standup history (paginated)
router.get("/history", getStandupHistory);

// Get current user's standups
router.get("/my-standups", getMyStandups);

// TODO: check this is not working. validation is failing.
// Update a standup
router.put("/:id", validate(updateStandupSchema), updateStandup);

// Delete a standup
router.delete("/:id", deleteStandup);

export default router;
