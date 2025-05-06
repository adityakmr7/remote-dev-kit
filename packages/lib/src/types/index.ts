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

export interface User {
  id: string
  email: string
  name: string | null
  avatarUrl: string | null
  bio: string | null
  jobTitle: string | null
  githubId: string | null
  githubUsername: string | null
  onboardingCompleted: boolean
  workspaceSettings: WorkspaceSettings | null
  role: string | null
  createdAt: string
  updatedAt: string
  emailVerified: boolean
}

export interface WorkspaceSettings {
  defaultEditor?: string
  theme?: string
  fontSize?: number
  tabSize?: number
  autoSave?: boolean
  [key: string]: any
}

export interface FormData {
    profile: {
      name: string;
      jobTitle: string;
      bio: string;
    };
    workspace: {
      defaultEditor: string;
      theme: string;
      fontSize: number;
      tabSize: number;
      autoSave: boolean;
    }
    github: {githubUsername:string ,connected: boolean };
    team: {
      teamName: string;
      teamMembers: string[];
    };
}

export interface OnboardingProgress {
  currentStep: number;
  completedSteps: number[];
  skippedSteps: number[];
  formData:FormData,
  lastUpdated: string;
}
