import apiClient from "./api-client";

// Types
export interface PullRequestUser {
  id: string
  name: string | null
  email: string
  avatarUrl: string | null
}

export interface PullRequestComment {
  id: string
  content: string
  userId: string
  user: PullRequestUser
  createdAt: string
  updatedAt: string
}

export interface PullRequestReviewer {
  id: string
  userId: string
  user: PullRequestUser
  createdAt: string
}

export interface PullRequest {
  id: string
  title: string
  description: string | null
  status: string
  repositoryUrl: string | null
  prNumber: number | null
  commitsCount: number
  filesChanged: number
  createdBy: string
  createdByUser: PullRequestUser
  teamId: string | null
  createdAt: string
  updatedAt: string
  comments: PullRequestComment[]
  reviewers: PullRequestReviewer[]
}

export interface CreatePullRequestInput {
  title: string
  description?: string
  status: string
  repositoryUrl?: string
  prNumber?: number
  commitsCount?: number
  filesChanged?: number
  teamId?: string
  reviewerIds?: string[]
}

export interface UpdatePullRequestInput {
  title?: string
  description?: string
  status?: string
  repositoryUrl?: string
  prNumber?: number
  commitsCount?: number
  filesChanged?: number
}

export interface AddCommentInput {
  content: string
}

// Get all pull requests for a team
export async function getTeamPullRequests(teamId: string): Promise<{ pullRequests: PullRequest[]; error?: Error }> {
  try {
    const response = await apiClient.get(`/teams/${teamId}/pull-requests`)
    return { pullRequests: response.data.pullRequests || [] }
  } catch (error) {
    console.error(`Error fetching pull requests for team ${teamId}:`, error)
    return { pullRequests: [], error: error as Error }
  }
}

// Get pull request by ID
export async function getPullRequestById(id: string): Promise<{ pullRequest: PullRequest | null; error?: Error }> {
  try {
    const response = await apiClient.get(`/pull-requests/${id}`)
    return { pullRequest: response.data.pullRequest }
  } catch (error) {
    console.error(`Error fetching pull request with ID ${id}:`, error)
    return { pullRequest: null, error: error as Error }
  }
}

// Create a new pull request
export async function createPullRequest(
  data: CreatePullRequestInput,
): Promise<{ pullRequest: PullRequest | null; error?: Error }> {
  try {
    const response = await apiClient.post("/pull-requests", data)
    return { pullRequest: response.data.pullRequest }
  } catch (error) {
    console.error("Error creating pull request:", error)
    return { pullRequest: null, error: error as Error }
  }
}

// Update a pull request
export async function updatePullRequest(
  id: string,
  data: UpdatePullRequestInput,
): Promise<{ pullRequest: PullRequest | null; error?: Error }> {
  try {
    const response = await apiClient.put(`/pull-requests/${id}`, data)
    return { pullRequest: response.data.pullRequest }
  } catch (error) {
    console.error(`Error updating pull request with ID ${id}:`, error)
    return { pullRequest: null, error: error as Error }
  }
}

// Delete a pull request
export async function deletePullRequest(id: string): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.delete(`/pull-requests/${id}`)
    return { success: true }
  } catch (error) {
    console.error(`Error deleting pull request with ID ${id}:`, error)
    return { success: false, error: error as Error }
  }
}

// Add a comment to a pull request
export async function addPullRequestComment(
  pullRequestId: string,
  data: AddCommentInput,
): Promise<{ comment: PullRequestComment | null; error?: Error }> {
  try {
    const response = await apiClient.post(`/pull-requests/${pullRequestId}/comments`, data)
    return { comment: response.data.comment }
  } catch (error) {
    console.error(`Error adding comment to pull request ${pullRequestId}:`, error)
    return { comment: null, error: error as Error }
  }
}

// Delete a comment from a pull request
export async function deletePullRequestComment(
  pullRequestId: string,
  commentId: string,
): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.delete(`/pull-requests/${pullRequestId}/comments/${commentId}`)
    return { success: true }
  } catch (error) {
    console.error(`Error deleting comment ${commentId} from pull request ${pullRequestId}:`, error)
    return { success: false, error: error as Error }
  }
}

// Add a reviewer to a pull request
export async function addPullRequestReviewer(
  pullRequestId: string,
  userId: string,
): Promise<{ reviewer: PullRequestReviewer | null; error?: Error }> {
  try {
    const response = await apiClient.post(`/pull-requests/${pullRequestId}/reviewers`, {
      userId,
    })
    return { reviewer: response.data.reviewer }
  } catch (error) {
    console.error(`Error adding reviewer to pull request ${pullRequestId}:`, error)
    return { reviewer: null, error: error as Error }
  }
}

// Remove a reviewer from a pull request
export async function removePullRequestReviewer(
  pullRequestId: string,
  reviewerId: string,
): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.delete(`/pull-requests/${pullRequestId}/reviewers/${reviewerId}`)
    return { success: true }
  } catch (error) {
    console.error(`Error removing reviewer ${reviewerId} from pull request ${pullRequestId}:`, error)
    return { success: false, error: error as Error }
  }
}

// Get my pull requests
export async function getMyPullRequests(): Promise<{ pullRequests: PullRequest[]; error?: Error }> {
  try {
    const response = await apiClient.get("/pull-requests/my")
    return { pullRequests: response.data.pullRequests || [] }
  } catch (error) {
    console.error("Error fetching my pull requests:", error)
    return { pullRequests: [], error: error as Error }
  }
}

// Get pull requests assigned to me for review
export async function getPullRequestsForMyReview(): Promise<{ pullRequests: PullRequest[]; error?: Error }> {
  try {
    const response = await apiClient.get("/pull-requests/for-my-review")
    return { pullRequests: response.data.pullRequests || [] }
  } catch (error) {
    console.error("Error fetching pull requests for my review:", error)
    return { pullRequests: [], error: error as Error }
  }
}
