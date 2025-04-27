import axios from "axios";
import { prismaClient as prisma } from "@repo/db/client";

interface GitHubUser {
  id: number;
  login: string;
  name: string;
  email: string;
  avatar_url: string;
}

export const getGitHubUser = async (code: string) => {
  // Exchange code for access token
  const tokenResponse = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    },
    {
      headers: {
        Accept: "application/json",
      },
    },
  );

  const { access_token } = tokenResponse.data;

  if (!access_token) {
    throw new Error("Failed to get access token from GitHub");
  }

  // Get user data from GitHub
  const userResponse = await axios.get<GitHubUser>(
    "https://api.github.com/user",
    {
      headers: {
        Authorization: `token ${access_token}`,
      },
    },
  );

  return userResponse.data;
};

export const findOrCreateGitHubUser = async (githubUser: GitHubUser) => {
  // Try to find user by email
  let user = await prisma.user.findUnique({
    where: { email: githubUser.email },
  });

  if (user) {
    // Update GitHub user info if needed
    if (
      user.provider !== "github" ||
      user.avatarUrl !== githubUser.avatar_url
    ) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          provider: "github",
          avatarUrl: githubUser.avatar_url,
        },
      });
    }
  } else {
    // Create new user
    user = await prisma.user.create({
      data: {
        email: githubUser.email,
        name: githubUser.name || githubUser.login,
        avatarUrl: githubUser.avatar_url,
        provider: "github",
      },
    });
  }

  return user;
};
