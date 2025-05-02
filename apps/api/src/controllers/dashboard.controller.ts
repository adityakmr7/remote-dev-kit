import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/error.utils";
import { prismaClient as prisma } from "@repo/db/client";
// Get dashboard statistics
export const getDashboardStats = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
      return;
    }

    // Get user's teams
    let userTeams;
    try {
      userTeams = await prisma.userTeam.findMany({
        where: { userId },
        select: { teamId: true },
      });
    } catch (dbError) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch team information",
      });
      return;
    }

    if (!userTeams || userTeams.length === 0) {
      res.status(404).json({
        success: false,
        message: "No teams found for this user",
      });
      return;
    }

    const teamIds = userTeams.map((ut) => ut.teamId);
    let teamMemberIds: string[] = [];

    try {
      teamMemberIds = await getTeamMemberIds(teamIds);
      if (!teamMemberIds || teamMemberIds.length === 0) {
        res.status(404).json({
          success: false,
          message: "No team members found",
        });
      }
    } catch (memberError) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch team members",
      });
    }

    // Setup date ranges
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const lastWeekDate = new Date();
    lastWeekDate.setDate(lastWeekDate.getDate() - 7);

    const yesterdayStart = new Date();
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);
    yesterdayStart.setHours(0, 0, 0, 0);

    const yesterdayEnd = new Date();
    yesterdayEnd.setDate(yesterdayEnd.getDate() - 1);
    yesterdayEnd.setHours(23, 59, 59, 999);

    // Get focus time stats
    let focusTimeStats;
    try {
      focusTimeStats = await prisma.focusTime.aggregate({
        where: {
          userId: { in: teamMemberIds },
          date: { gte: lastWeekDate },
        },
        _avg: {
          minutes: true,
        },
      });
    } catch (focusError) {
      console.error("Error fetching focus time stats:", focusError);
      focusTimeStats = { _avg: { minutes: null } };
    }

    // Get standup completion rate
    let standupCompletions = 0;
    let yesterdayStandupCompletions = 0;
    const totalTeamMembers: number = teamMemberIds.length;

    try {
      standupCompletions = await prisma.standup.count({
        where: {
          userId: { in: teamMemberIds },
          createdAt: {
            gte: todayStart,
            lte: todayEnd,
          },
        },
      });
    } catch (standupError) {
      console.error("Error fetching standup completions:", standupError);
    }

    try {
      yesterdayStandupCompletions = await prisma.standup.count({
        where: {
          userId: { in: teamMemberIds },
          createdAt: {
            gte: yesterdayStart,
            lte: yesterdayEnd,
          },
        },
      });
    } catch (yesterdayStandupError) {
      console.error(
        "Error fetching yesterday's standup data:",
        yesterdayStandupError,
      );
    }

    // Calculate rates safely
    const standupCompletionRate =
      totalTeamMembers > 0
        ? Math.round((standupCompletions / totalTeamMembers) * 100)
        : 0;

    const yesterdayCompletionRate =
      totalTeamMembers > 0
        ? Math.round((yesterdayStandupCompletions / totalTeamMembers) * 100)
        : 0;

    // Calculate percentage change safely
    const standupChangePercentage =
      yesterdayCompletionRate > 0
        ? Math.round(
            ((standupCompletionRate - yesterdayCompletionRate) /
              yesterdayCompletionRate) *
              100,
          )
        : 0;

    // Get open PRs count
    let openPRs = 0;
    let yesterdayPRs = 0;

    try {
      openPRs = await prisma.pullRequest.count({
        where: {
          teamId: { in: teamIds },
          status: { in: ["OPEN", "NEEDS_REVIEW", "CHANGES_REQUESTED"] },
        },
      });
    } catch (prError) {
      console.error("Error fetching open PRs:", prError);
    }

    try {
      yesterdayPRs = await prisma.pullRequest.count({
        where: {
          teamId: { in: teamIds },
          status: { in: ["OPEN", "NEEDS_REVIEW", "CHANGES_REQUESTED"] },
          createdAt: { lt: todayStart },
        },
      });
    } catch (yesterdayPrError) {
      console.error("Error fetching yesterday's PR data:", yesterdayPrError);
    }

    const prChangeCount = openPRs - yesterdayPRs;

    // Format the response
    const stats = {
      focusTime: {
        average:
          Math.round(((focusTimeStats._avg.minutes || 0) / 60) * 10) / 10, // Convert to hours with 1 decimal
        changePercentage: 12, // Placeholder - would calculate from historical data
      },
      standupCompletion: {
        rate: standupCompletionRate,
        changePercentage: standupChangePercentage,
      },
      openPRs: {
        count: openPRs,
        change: prChangeCount,
      },
    };

    res.status(200).json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard statistics",
      error: error instanceof Error ? error.message : "Unknown error",
    });
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

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's teams
    const userTeams = await prisma.userTeam.findMany({
      where: { userId },
      select: { teamId: true },
    });

    const teamIds = userTeams.map((ut) => ut.teamId);

    // Get today's date range
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    // Get standups from team members
    const standups = await prisma.standup.findMany({
      where: {
        userId: { in: await getTeamMemberIds(teamIds) },
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

    // Format the response
    const formattedStandups = standups.map((standup) => ({
      id: standup.id,
      user: {
        id: standup.user.id,
        name: standup.user.name,
        email: standup.user.email,
        avatarUrl: standup.user.avatarUrl,
      },
      yesterday: standup.yesterday,
      today: standup.today,
      blockers: standup.blockers,
      tags: standup.tags.map((tag) => tag.name),
      status: getStatusFromBlockers(standup.blockers),
      createdAt: standup.createdAt,
    }));

    res.status(200).json({ standups: formattedStandups });
  } catch (error) {
    next(error);
  }
};

// Get active pair programming sessions
export const getActivePairSessions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's teams
    const userTeams = await prisma.userTeam.findMany({
      where: { userId },
      select: { teamId: true },
    });

    const teamIds = userTeams.map((ut) => ut.teamId);

    // Get active pair programming sessions
    const pairSessions = await prisma.pairProgrammingSession.findMany({
      where: {
        teamId: { in: teamIds },
        status: "ACTIVE",
      },
      include: {
        participants: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
      orderBy: {
        startTime: "desc",
      },
    });

    // Format the response
    const formattedSessions = pairSessions.map((session) => ({
      id: session.id,
      title: session.title,
      description: session.description,
      startTime: session.startTime,
      participants: session.participants.map((participant) => ({
        id: participant.user.id,
        name: participant.user.name,
        email: participant.user.email,
        avatarUrl: participant.user.avatarUrl,
      })),
    }));

    res.status(200).json({ pairSessions: formattedSessions });
  } catch (error) {
    next(error);
  }
};

// Get team members
export const getTeamMembers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's teams
    const userTeams = await prisma.userTeam.findMany({
      where: { userId },
      select: { teamId: true },
    });

    const teamIds = userTeams.map((ut) => ut.teamId);

    // Get team members
    const teamMembers = await prisma.user.findMany({
      where: {
        teams: {
          some: {
            teamId: { in: teamIds },
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
        status: true,
        role: true,
      },
    });

    res.status(200).json({ teamMembers });
  } catch (error) {
    next(error);
  }
};

// Helper function to get team member IDs
async function getTeamMemberIds(teamIds: string[]): Promise<string[]> {
  const teamMembers = await prisma.userTeam.findMany({
    where: {
      teamId: { in: teamIds },
    },
    select: {
      userId: true,
    },
  });

  return teamMembers.map((tm) => tm.userId);
}

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
