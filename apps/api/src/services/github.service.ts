import axios from "axios";
import { prismaClient as prisma } from "@repo/db/client";

interface GitHubUser {
  id: number;
  login: string;
  name: string;
  email: string;
  avatar_url: string;
}

export const connectToGithub = async () => {
  try {
    // Generate a random state parameter to prevent CSRF attacks
    const state = Math.random().toString(36).substring(2);
    sessionStorage.setItem("github_oauth_state", state);
    // Define the scopes we need for PR review and code sync
    // repo: Full control of private repositories
    // read:user: Read access to user profile info
    // user:email: Access to user's email addresses
    const scopes = ["repo", "read:user", "user:email"].join(" ");
    // GitHub OAuth client ID should be stored in environment variables
    const clientId = "Ov23liM600pjMZWjJwXN";
    if (!clientId) {
      throw new Error("GitHub Client ID is not configured");
    }
    // Construct the redirect URI - this should match what's configured in your GitHub OAuth app
    const redirectUri = encodeURIComponent(
      `${window.location.origin}/api/auth/github/callback`,
    );

    // Build the full GitHub OAuth authorization URL
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopes)}&state=${state}`;

    // Redirect the user to GitHub's authorization page
    window.location.href = githubAuthUrl;
  } catch (e) {
    console.error("Error connecting to GitHub:", e);
  }
};

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
