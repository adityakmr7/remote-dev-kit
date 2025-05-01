export interface UserPayload {
  id: string
}

// Extend Express Request type to include user and userTeamRole
declare global {
  namespace Express {
    interface Request {
      user?: UserPayload
      userTeamRole?: string
    }
  }
}
