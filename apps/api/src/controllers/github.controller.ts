import type { NextFunction, Request, Response } from "express";
import {
  findOrCreateGitHubUser,
  getGitHubUser,
} from "../services/github.service";
import { generateRefreshToken, generateToken } from "../utils/token.utils";
import type { GithubAuthInput } from "../schemas/auth.schema";

export const githubAuth = async (
  req: Request<{}, {}, GithubAuthInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { code } = req.body;

    // Get GitHub user data
    const githubUser = await getGitHubUser(code);

    // Find or create user in our database
    const user = await findOrCreateGitHubUser(githubUser);

    // Generate tokens
    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.status(200).json({
      user: userWithoutPassword,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
};
