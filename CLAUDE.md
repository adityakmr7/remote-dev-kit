# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Remote Development Kit** - a monorepo built with Turborepo containing a full-stack application for remote team collaboration. The project includes team management, standup tracking, pair programming, PR feedback, and GitHub integration.

## Architecture

**Monorepo Structure:**
- `apps/api/` - Express.js API server with Bun runtime
- `apps/web/` - Next.js frontend application (main user interface)
- `apps/super-admin/` - Next.js super admin dashboard
- `packages/db/` - Prisma database layer with PostgreSQL
- `packages/lib/` - Shared API client and utilities
- `packages/ui/` - Shared React components
- `packages/eslint-config/` - ESLint configurations
- `packages/typescript-config/` - TypeScript configurations

**Key Technologies:**
- **Runtime:** Bun (for API), Node.js (for Next.js apps)
- **Database:** PostgreSQL with Prisma ORM
- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend:** Express.js with TypeScript
- **UI Components:** Radix UI primitives
- **Build System:** Turborepo
- **Package Manager:** Bun (primary), with npm/yarn locks for compatibility

## Development Commands

**Root-level commands (run from project root):**
```bash
bun dev          # Start all apps in development mode
bun build        # Build all apps and packages
bun lint         # Lint all packages
bun check-types  # Type check all packages
bun format       # Format code with Prettier
bun db:seed      # Seed the database
bun db:migrate   # Run database migrations
bun db:generate  # Generate Prisma client
bun db:studio    # Open Prisma Studio
bun db:reset     # Reset database and run migrations
bun db:deploy    # Deploy migrations (production)
```

**API Server (apps/api/):**
```bash
bun start        # Start the API server
```

**Frontend Apps (apps/web/ or apps/super-admin/):**
```bash
bun dev          # Start Next.js dev server
bun build        # Build for production
bun start        # Start production server
bun lint         # Run ESLint
```

## Database Management

The database layer is managed in `packages/db/` using Prisma:

**Schema location:** `packages/db/prisma/schema.prisma`
**Generated client:** `packages/db/src/generated/prisma/`

**Key models:**
- `User` - User accounts with GitHub integration
- `Organization` - Top-level organizations
- `Team` - Teams within organizations
- `Standup` - Daily standup entries
- `PairSession` - Pair programming sessions
- `PullRequest` - PR tracking and feedback

## API Architecture

The Express.js API (`apps/api/`) follows a structured pattern:

**Route structure:**
- `src/routes/` - Route definitions
- `src/controllers/` - Route handlers
- `src/middleware/` - Authentication, validation, error handling
- `src/services/` - Business logic (email, GitHub integration)
- `src/schemas/` - Zod validation schemas

**Key endpoints:**
- `/api/auth/*` - Authentication and user management
- `/api/teams/*` - Team management
- `/api/standups/*` - Standup CRUD operations
- `/api/users/*` - User profile management
- `/api/admin/*` - Admin operations

## Frontend Architecture

**Apps structure:**
- `web/` - Main user-facing application
- `super-admin/` - Administrative dashboard

**Key features:**
- Authentication flow with email verification
- Onboarding process for new users
- GitHub OAuth integration
- Team management and invitations
- Standup form and history
- Theme switching (light/dark mode)

**Shared components:** Located in `packages/ui/` and `components/ui/` directories

## Package Dependencies

**Shared packages:**
- `@repo/db` - Database client (imported as `@repo/db/client`)
- `@repo/lib` - API client and utilities (imported as `@repo/lib/*`)
- `@repo/ui` - Shared UI components

**Authentication:** JWT-based with bcrypt password hashing
**Validation:** Zod schemas for API validation
**Email:** Nodemailer for transactional emails
**Security:** Helmet, CORS, input validation

## Docker Setup

**Docker development:**
```bash
docker-compose up -d         # Start PostgreSQL and API services
docker-compose down          # Stop all services
docker-compose logs api      # View API logs
docker-compose logs postgres # View database logs
```

**Services:**
- `postgres` - PostgreSQL 16 database on port 5432
- `api` - Express.js API server on port 4000

**Environment variables:** Update the values in `docker-compose.yml` for production use, especially:
- `JWT_SECRET` - Change from default
- `EMAIL_*` - Configure email service
- `GITHUB_*` - Set up GitHub OAuth credentials

## Development Notes

**Environment setup:**
- Requires PostgreSQL database (available via Docker)
- Environment variables needed for database, GitHub OAuth, email service
- Uses Bun as package manager but maintains compatibility with npm/yarn

**GitHub Integration:**
- OAuth flow for user authentication
- GitHub API integration for repository access
- Token management for GitHub operations

**Onboarding Flow:**
Multi-step onboarding including profile setup, GitHub connection, team joining, and workspace configuration.