import { getSession } from "./auth";

const GITHUB_API_URL = "https://api.github.com";

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  private: boolean;
  owner: {
    login: string;
    avatar_url: string;
  };
  default_branch: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  language: string | null;
};

export type GitHubPullRequest = {
  id: number;
  number: number;
  title: string;
  html_url: string;
  state: string;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  updated_at: string;
  body: string | null;
};

export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
  email: string | null;
  bio: string | null;
  html_url: string;
};

async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const session = await getSession();

  if (!session?.user?.githubToken) {
    throw new Error("GitHub token not found");
  }

  const headers = {
    Accept: "application/vnd.github.v3+json",
    Authorization: `token ${session.user.githubToken}`,
    ...options.headers,
  };

  return fetch(url, {
    ...options,
    headers,
  });
}

export async function getUserProfile(): Promise<GitHubUser> {
  const response = await fetchWithAuth(`${GITHUB_API_URL}/user`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch GitHub user profile: ${response.statusText}`,
    );
  }

  return response.json();
}

export async function getUserRepositories(): Promise<GitHubRepo[]> {
  const response = await fetchWithAuth(
    `${GITHUB_API_URL}/user/repos?sort=updated&per_page=100`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.statusText}`);
  }

  return response.json();
}

export async function getRepositoryPullRequests(
  owner: string,
  repo: string,
): Promise<GitHubPullRequest[]> {
  const response = await fetchWithAuth(
    `${GITHUB_API_URL}/repos/${owner}/${repo}/pulls?state=all&per_page=100`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch pull requests: ${response.statusText}`);
  }

  return response.json();
}

export async function getRepository(
  owner: string,
  repo: string,
): Promise<GitHubRepo> {
  const response = await fetchWithAuth(
    `${GITHUB_API_URL}/repos/${owner}/${repo}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch repository: ${response.statusText}`);
  }

  return response.json();
}
