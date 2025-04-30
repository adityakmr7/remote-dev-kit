import type { NextFunction, Request, Response } from "express";
import { Prisma, prismaClient as prisma } from "@repo/db/client";
import { ApiError } from "../utils/error.utils";
import type {
  CreateStandupInput,
  UpdateStandupInput,
} from "../schemas/standup.schema";
import logger from "../utils/logger.ts";

// Create a new standup
export const createStandup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    const standupData: CreateStandupInput = req.body.body;

    logger.log("info", "Creating standup", {
      requestBody: standupData,
    });
    console.log("Creating standup", {
      requestBody: standupData,
    });
    // If teamId is not provided, get the user's default team
    let teamId = standupData.teamId;
    if (!teamId) {
      const userTeam = await prisma.userTeam.findFirst({
        where: { userId },
        orderBy: { createdAt: "asc" },
      });

      if (!userTeam) {
        throw new ApiError(400, "User does not belong to any team");
      }

      teamId = userTeam.teamId;
    } else {
      // Verify user belongs to the specified team
      const userTeam = await prisma.userTeam.findFirst({
        where: { userId, teamId },
      });

      if (!userTeam) {
        throw new ApiError(403, "User does not belong to the specified team");
      }
    }

    // Process tags
    let tags: any = [];
    if (standupData.tags && standupData.tags.length > 0) {
      // Get or create tags
      tags = await Promise.all(
        standupData.tags.map(async (tagName) => {
          const tag = await prisma.tag.upsert({
            where: { name: tagName },
            update: {},
            create: { name: tagName },
          });
          return tag;
        }),
      );
    }

    // Create standup
    const standup = await prisma.standup.create({
      data: {
        userId,
        teamId,
        yesterday: standupData.yesterday,
        today: standupData.today,
        blockers: standupData.blockers,
        audioUrl: standupData.audioUrl,
        tags: {
          connect: tags.map((tag: any) => ({ id: tag.id })),
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
          },
        },
        tags: true,
      },
    });

    // Format the response
    const formattedStandup = {
      id: standup.id,
      user: standup.user,
      yesterday: standup.yesterday,
      today: standup.today,
      blockers: standup.blockers,
      audioUrl: standup.audioUrl,
      tags: standup.tags.map((tag) => tag.name),
      status: getStatusFromBlockers(standup.blockers),
      createdAt: standup.createdAt,
    };

    res.status(201).json({ standup: formattedStandup });
  } catch (error) {
    next(error);
  }
};

// Get standup by ID
export const getStandupById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    const standup = await prisma.standup.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
          },
        },
        tags: true,
        team: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!standup) {
      throw new ApiError(404, "Standup not found");
    }

    // Check if user has access to this standup (belongs to same team)
    const userTeam = await prisma.userTeam.findFirst({
      where: { userId, teamId: standup.teamId },
    });

    if (!userTeam && standup.userId !== userId) {
      throw new ApiError(403, "You don't have access to this standup");
    }

    // Format the response
    const formattedStandup = {
      id: standup.id,
      user: standup.user,
      yesterday: standup.yesterday,
      today: standup.today,
      blockers: standup.blockers,
      audioUrl: standup.audioUrl,
      tags: standup.tags.map((tag) => tag.name),
      team: standup.team,
      status: getStatusFromBlockers(standup.blockers),
      createdAt: standup.createdAt,
    };

    res.status(200).json({ standup: formattedStandup });
  } catch (error) {
    next(error);
  }
};

// Get today's standups
export const getTodayStandups = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    console.log("userId", userId);
    logger.log("info", "Getting today's standups", { userId });
    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's teams
    const userTeams = await prisma.userTeam.findMany({
      where: { userId },
      select: { teamId: true },
    });
    console.log("userTeams", userTeams);
    const teamIds = userTeams.map((ut) => ut.teamId);

    // Get today's date range
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    // Get standups from team members
    const standups = await prisma.standup.findMany({
      where: {
        teamId: { in: teamIds },
        createdAt: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
          },
        },
        tags: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("standups", standups);

    // Format the response
    const formattedStandups = standups.map((standup) => ({
      id: standup.id,
      user: standup.user,
      yesterday: standup.yesterday,
      today: standup.today,
      blockers: standup.blockers,
      audioUrl: standup.audioUrl,
      tags: standup.tags.map((tag) => tag.name),
      status: getStatusFromBlockers(standup.blockers),
      createdAt: standup.createdAt,
    }));

    res.status(200).json({ standups: formattedStandups });
  } catch (error) {
    next(error);
  }
};

export const getStandupsByDate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { date } = req.params;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }
    if (!date) {
      throw new ApiError(400, "Date is required");
    }
    // Validate date format
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      throw new ApiError(400, "Invalid date format. Use YYYY-MM-DD");
    }

    // Get user's teams
    const userTeams = await prisma.userTeam.findMany({
      where: { userId },
      select: { teamId: true },
    });

    const teamIds = userTeams.map((ut) => ut.teamId);

    // Set date range for the specified date
    const startDate = new Date(dateObj);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(dateObj);
    endDate.setHours(23, 59, 59, 999);

    // Get standups for the specified date
    const standups = await prisma.standup.findMany({
      where: {
        teamId: { in: teamIds },
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
          },
        },
        tags: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Format the response
    const formattedStandups = standups.map((standup) => ({
      id: standup.id,
      user: standup.user,
      yesterday: standup.yesterday,
      today: standup.today,
      blockers: standup.blockers,
      audioUrl: standup.audioUrl,
      tags: standup.tags.map((tag) => tag.name),
      status: getStatusFromBlockers(standup.blockers),
      createdAt: standup.createdAt,
    }));

    res.status(200).json({ standups: formattedStandups, date });
  } catch (error) {
    next(error);
  }
};

export const getStandupHistory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const page = Number.parseInt(req.query.page as string) || 1;
    const limit = Number.parseInt(req.query.limit as string) || 10;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's teams
    const userTeams = await prisma.userTeam.findMany({
      where: { userId },
      select: { teamId: true },
    });

    const teamIds = userTeams.map((ut) => ut.teamId);

    if (teamIds.length === 0) {
      return res.status(200).json({
        history: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 0,
        },
      });
    }

    // Get distinct dates
    const distinctDates = await prisma.$queryRaw<Array<{ date: Date }>>`
      SELECT DISTINCT DATE("createdAt") as date
      FROM "Standup"
      WHERE "teamId" IN (${Prisma.join(teamIds)})
      ORDER BY date DESC
      LIMIT ${limit} OFFSET ${(page - 1) * limit}
    `;

    // Get counts for each date
    const dateCounts = await Promise.all(
      distinctDates.map(async ({ date }) => {
        const dateStart = new Date(date);
        const dateEnd = new Date(date);
        dateEnd.setDate(dateEnd.getDate() + 1);

        const count = await prisma.standup.count({
          where: {
            teamId: { in: teamIds },
            createdAt: {
              gte: dateStart,
              lt: dateEnd,
            },
          },
        });

        return {
          date: dateStart.toISOString().split("T")[0],
          participantCount: count,
        };
      }),
    );

    // Get total distinct dates count for pagination
    const totalDatesCount = await prisma.$queryRaw<Array<{ count: BigInt }>>`
      SELECT COUNT(DISTINCT DATE("createdAt")) as count
      FROM "Standup"
      WHERE "teamId" IN (${Prisma.join(teamIds)})
    `;

    const total = Number(totalDatesCount[0]?.count || 0);

    res.status(200).json({
      history: dateCounts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get current user's standups
export const getMyStandups = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const page = Number.parseInt(req.query.page as string) || 1;
    const limit = Number.parseInt(req.query.limit as string) || 10;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's standups
    const standups = await prisma.standup.findMany({
      where: { userId },
      include: {
        tags: true,
        team: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    // Get total count for pagination
    const total = await prisma.standup.count({
      where: { userId },
    });

    // Format the response
    const formattedStandups = standups.map((standup) => ({
      id: standup.id,
      yesterday: standup.yesterday,
      today: standup.today,
      blockers: standup.blockers,
      audioUrl: standup.audioUrl,
      tags: standup.tags.map((tag) => tag.name),
      team: standup.team,
      status: getStatusFromBlockers(standup.blockers),
      createdAt: standup.createdAt,
    }));

    res.status(200).json({
      standups: formattedStandups,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update a standup
export const updateStandup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;
    const standupData: UpdateStandupInput = req.body;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Check if standup exists and belongs to the user
    const existingStandup = await prisma.standup.findUnique({
      where: { id },
      include: { tags: true },
    });

    if (!existingStandup) {
      throw new ApiError(404, "Standup not found");
    }

    if (existingStandup.userId !== userId) {
      throw new ApiError(403, "You can only update your own standups");
    }

    // Process tags if provided
    let tags: any = [];
    if (standupData.tags && standupData.tags.length > 0) {
      // Get or create tags
      tags = await Promise.all(
        standupData.tags.map(async (tagName) => {
          const tag = await prisma.tag.upsert({
            where: { name: tagName },
            update: {},
            create: { name: tagName },
          });
          return tag;
        }),
      );
    }

    // Update standup
    const standup = await prisma.standup.update({
      where: { id },
      data: {
        yesterday: standupData.yesterday,
        today: standupData.today,
        blockers: standupData.blockers,
        audioUrl: standupData.audioUrl,
        tags: standupData.tags
          ? {
              disconnect: existingStandup.tags.map((tag) => ({ id: tag.id })),
              connect: tags.map((tag: any) => ({ id: tag.id })),
            }
          : undefined,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
          },
        },
        tags: true,
      },
    });

    // Format the response
    const formattedStandup = {
      id: standup.id,
      user: standup.user,
      yesterday: standup.yesterday,
      today: standup.today,
      blockers: standup.blockers,
      audioUrl: standup.audioUrl,
      tags: standup.tags.map((tag) => tag.name),
      status: getStatusFromBlockers(standup.blockers),
      createdAt: standup.createdAt,
      updatedAt: standup.updatedAt,
    };

    res.status(200).json({ standup: formattedStandup });
  } catch (error) {
    next(error);
  }
};

// Delete a standup
export const deleteStandup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Check if standup exists and belongs to the user
    const existingStandup = await prisma.standup.findUnique({
      where: { id },
    });

    if (!existingStandup) {
      throw new ApiError(404, "Standup not found");
    }

    if (existingStandup.userId !== userId) {
      throw new ApiError(403, "You can only delete your own standups");
    }

    // Delete standup
    await prisma.standup.delete({
      where: { id },
    });

    res.status(200).json({ message: "Standup deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// Helper function to determine status from blockers
function getStatusFromBlockers(
  blockers: string | null,
): "blocked" | "needs help" | "on track" {
  if (!blockers) return "on track";

  const blockersLower = blockers.toLowerCase();

  if (blockersLower.includes("blocked") || blockersLower.includes("blocking")) {
    return "blocked";
  }

  if (
    blockersLower.includes("need help") ||
    blockersLower.includes("needs help") ||
    blockersLower.includes("assistance")
  ) {
    return "needs help";
  }

  return "on track";
}
