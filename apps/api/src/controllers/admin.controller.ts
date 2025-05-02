import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ApiError, httpCode } from "../utils/error.utils";
import { generateRefreshToken, generateToken } from "../utils/token.utils";
import { prismaClient as prisma } from "@repo/db/client";
// Admin login
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(
        httpCode.BAD_REQUEST,
        "Email and password are required",
      );
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new ApiError(httpCode.UNAUTHORIZED, "Invalid credentials");
    }

    // Check if user is an admin
    if (user.role !== "ADMIN") {
      throw new ApiError(
        httpCode.FORBIDDEN,
        "Access denied. Admin privileges required",
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password || "");
    if (!isPasswordValid) {
      throw new ApiError(httpCode.UNAUTHORIZED, "Invalid credentials");
    }

    // Generate tokens
    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.status(httpCode.OK).json({
      user: userWithoutPassword,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
};
export const registerSuperAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, password, adminSecretKey } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
      throw new ApiError(
        httpCode.BAD_REQUEST,
        "Name, email, and password are required",
      );
    }

    // Validate admin secret key
    const configuredSecretKey = process.env.ADMIN_SECRET_KEY;
    if (!configuredSecretKey) {
      throw new ApiError(
        httpCode.INTERNAL_SERVER_ERROR,
        "Admin secret key is not configured",
      );
    }

    if (!adminSecretKey || adminSecretKey !== configuredSecretKey) {
      throw new ApiError(httpCode.FORBIDDEN, "Invalid admin secret key");
    }

    // Check if email is already in use
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ApiError(httpCode.CONFLICT, "Email is already in use");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create super admin user
    const superAdmin = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "ADMIN",
        isAdmin: true,
        provider: "email",
        status: "online",
      },
    });

    // Create admin activity log
    await prisma.adminActivityLog.create({
      data: {
        action: "CREATE",
        entityType: "USER",
        entityId: superAdmin.id,
        adminId: superAdmin.id, // Self-created
        details: JSON.stringify({
          name: superAdmin.name,
          email: superAdmin.email,
          role: "ADMIN",
          isAdmin: true,
        }),
        ipAddress: req.ip,
        userAgent: req.headers["user-agent"],
      },
    });

    // Generate tokens
    const accessToken = generateToken(superAdmin.id);
    const refreshToken = generateRefreshToken(superAdmin.id);

    // Remove password from response
    const { password: _, ...adminWithoutPassword } = superAdmin;

    res.status(httpCode.CREATED).json({
      user: adminWithoutPassword,
      accessToken,
      refreshToken,
      message: "Super admin registered successfully",
    });
  } catch (error) {
    next(error);
  }
};
// Validate admin token
export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // User is already authenticated and admin role checked by middleware
    const user = await prisma.user.findUnique({
      where: { id: req.user?.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    res.status(httpCode.OK).json({
      valid: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// Refresh token
export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { refreshToken: token } = req.body;

    if (!token) {
      throw new ApiError(httpCode.BAD_REQUEST, "Refresh token is required");
    }

    try {
      // Verify refresh token
      const decoded = jwt.verify(
        token,
        process.env.JWT_REFRESH_SECRET as string,
      ) as { userId: string };

      // Check if user exists and is an admin
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
      });

      if (!user) {
        throw new ApiError(httpCode.UNAUTHORIZED, "Invalid refresh token");
      }

      if (user.role !== "ADMIN") {
        throw new ApiError(
          httpCode.FORBIDDEN,
          "Access denied. Admin privileges required",
        );
      }

      // Generate new tokens
      const accessToken = generateToken(user.id);
      const refreshToken = generateRefreshToken(user.id);

      res.status(httpCode.OK).json({
        accessToken,
        refreshToken,
      });
    } catch (error) {
      throw new ApiError(httpCode.UNAUTHORIZED, "Invalid refresh token");
    }
  } catch (error) {
    next(error);
  }
};

// Logout
export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // In a real application, you might want to invalidate the token
    // For JWT, this often involves maintaining a blacklist of tokens
    // For simplicity, we'll just return a success message
    res.status(httpCode.OK).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};

// Get all organizations
export const getOrganizations = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const organizations = await prisma.organization.findMany({
      include: {
        _count: {
          select: {
            members: true,
            teams: true,
          },
        },
      },
    });

    res.status(httpCode.OK).json(organizations);
  } catch (error) {
    next(error);
  }
};

// Get organization by ID
export const getOrganizationById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const organization = await prisma.organization.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            members: true,
            teams: true,
          },
        },
      },
    });

    if (!organization) {
      throw new ApiError(httpCode.NOT_FOUND, "Organization not found");
    }

    res.status(httpCode.OK).json(organization);
  } catch (error) {
    next(error);
  }
};

// Create organization
export const createOrganization = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, ownerId } = req.body;

    if (!name) {
      throw new ApiError(httpCode.BAD_REQUEST, "Organization name is required");
    }

    // Check if owner exists
    if (ownerId) {
      const owner = await prisma.user.findUnique({
        where: { id: ownerId },
      });

      if (!owner) {
        throw new ApiError(httpCode.BAD_REQUEST, "Owner not found");
      }
    }

    const organization = await prisma.organization.create({
      data: {
        name,
        members: {
          create: ownerId
            ? {
                userId: ownerId,
                role: "ADMIN",
              }
            : undefined,
        },
      },
    });

    res.status(httpCode.CREATED).json(organization);
  } catch (error) {
    next(error);
  }
};

// Update organization
export const updateOrganization = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      throw new ApiError(httpCode.BAD_REQUEST, "Organization name is required");
    }

    const organization = await prisma.organization.update({
      where: { id },
      data: {
        name,
      },
    });

    res.status(httpCode.OK).json(organization);
  } catch (error: any) {
    if (error.code === "P2025") {
      return next(new ApiError(httpCode.NOT_FOUND, "Organization not found"));
    }
    next(error);
  }
};

// Delete organization
export const deleteOrganization = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    await prisma.organization.delete({
      where: { id },
    });

    res.status(httpCode.NO_CONTENT).send();
  } catch (error: any) {
    if (error.code === "P2025") {
      return next(new ApiError(httpCode.NOT_FOUND, "Organization not found"));
    }
    next(error);
  }
};

// Get all users
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            organizations: true,
            teams: true,
          },
        },
      },
    });

    res.status(httpCode.OK).json(users);
  } catch (error) {
    next(error);
  }
};

// Get user by ID
export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        organizations: {
          include: {
            organization: true,
          },
        },
        teams: {
          include: {
            team: true,
          },
        },
      },
    });

    if (!user) {
      throw new ApiError(httpCode.NOT_FOUND, "User not found");
    }

    res.status(httpCode.OK).json(user);
  } catch (error) {
    next(error);
  }
};

// Create user
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      throw new ApiError(
        httpCode.BAD_REQUEST,
        "Name, email, and password are required",
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ApiError(
        httpCode.CONFLICT,
        "User with this email already exists",
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || "MEMBER",
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(httpCode.CREATED).json(user);
  } catch (error) {
    next(error);
  }
};

// Update user
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { name, email, role, password } = req.body;

    const data: any = {};

    if (name) data.name = name;
    if (email) data.email = email;
    if (role) data.role = role;
    if (password) data.password = await bcrypt.hash(password, 10);

    const user = await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(httpCode.OK).json(user);
  } catch (error: any) {
    if (error.code === "P2025") {
      return next(new ApiError(httpCode.NOT_FOUND, "User not found"));
    }
    next(error);
  }
};

// Delete user
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: { id },
    });

    res.status(httpCode.NO_CONTENT).send();
  } catch (error: any) {
    if (error.code === "P2025") {
      return next(new ApiError(httpCode.NOT_FOUND, "User not found"));
    }
    next(error);
  }
};

// Get dashboard stats
export const getDashboardStats = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const [
      totalUsers = 0,
      totalOrganizations = 0,
      totalTeams = 0,
      recentUsers = 0,
      recentOrganizations = 0,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.organization.count(),
      prisma.team.count(),
      prisma.user.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
      }),
      prisma.organization.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          createdAt: true,
          _count: {
            select: {
              members: true,
            },
          },
        },
      }),
    ]);

    console.log({
      totalUsers,
      totalOrganizations,
      totalTeams,
      recentUsers,
      recentOrganizations,
    });
    res.status(httpCode.OK).json({
      stats: {
        totalUsers,
        totalOrganizations,
        totalTeams,
      },
      recentUsers,
      recentOrganizations,
    });
  } catch (error) {
    next(error);
  }
};
