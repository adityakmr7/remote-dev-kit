# Remote Development Kit

A comprehensive full-stack application for remote team collaboration, built with modern technologies and containerized for easy deployment.

## 🚀 Features

- **Team Management** - Create and manage development teams
- **Standup Tracking** - Daily standup entries and history
- **GitHub Integration** - OAuth authentication and repository access
- **Pair Programming** - Schedule and track pair programming sessions
- **PR Feedback** - Collaborative pull request review system
- **Admin Dashboard** - Super admin panel for user and organization management
- **Email Verification** - Secure user onboarding with email verification
- **Multi-tenant** - Organization-based multi-tenancy

## 🏗️ Architecture

This is a Turborepo monorepo containing:

### Apps
- **`apps/api/`** - Express.js API server with Bun runtime
- **`apps/web/`** - Next.js frontend application (main user interface)
- **`apps/super-admin/`** - Next.js super admin dashboard

### Packages
- **`packages/db/`** - Prisma database layer with PostgreSQL
- **`packages/lib/`** - Shared API client and utilities
- **`packages/ui/`** - Shared React components
- **`packages/eslint-config/`** - ESLint configurations
- **`packages/typescript-config/`** - TypeScript configurations

## 🛠️ Tech Stack

- **Runtime:** Bun (API), Node.js (Next.js apps)
- **Database:** PostgreSQL with Prisma ORM
- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend:** Express.js with TypeScript
- **UI Components:** Radix UI primitives
- **Build System:** Turborepo
- **Containerization:** Docker & Docker Compose

## 🚀 Quick Start with Docker

The easiest way to get started is using Docker Compose:

### Prerequisites
- Docker and Docker Compose installed
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd remote-dev-kit
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start the services**
   ```bash
   docker-compose up -d
   ```

4. **Access the applications**
   - API: http://localhost:4000
   - Web App: http://localhost:3000 (after starting separately)
   - PostgreSQL: localhost:5432

### Docker Commands

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs api
docker-compose logs postgres

# Stop services
docker-compose down

# Rebuild and start
docker-compose up --build -d
```

## 🔧 Local Development Setup

### Prerequisites
- Node.js 18+ or Bun 1.2+
- PostgreSQL database
- Git

### Installation

1. **Install dependencies**
   ```bash
   bun install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Configure your database and other settings
   ```

3. **Set up the database**
   ```bash
   # Generate Prisma client
   cd packages/db && bunx prisma generate
   
   # Run migrations
   bunx prisma migrate dev
   
   # Seed the database
   bun db:seed
   ```

4. **Start development servers**
   ```bash
   # Start all apps in development mode
   bun dev
   
   # Or start individual services
   cd apps/api && bun start        # API server
   cd apps/web && bun dev          # Frontend app
   cd apps/super-admin && bun dev  # Admin dashboard
   ```

## 📝 Environment Configuration

Key environment variables to configure:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/remote_dev_kit

# JWT
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=7d

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Email Service
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🧪 Development Commands

```bash
# Build all packages
bun build

# Lint all packages
bun lint

# Type check all packages
bun check-types

# Format code
bun format

# Database operations
bun db:seed              # Seed database
cd packages/db && bunx prisma studio  # Open Prisma Studio
```

## 📊 Database Schema

Key models:
- **User** - User accounts with GitHub integration
- **Organization** - Top-level organizations
- **Team** - Teams within organizations
- **Standup** - Daily standup entries
- **PairSession** - Pair programming sessions
- **PullRequest** - PR tracking and feedback

## 🔐 Authentication

- JWT-based authentication
- GitHub OAuth integration
- Email verification workflow
- Role-based access control (User, Admin, Super Admin)

## 🚀 Deployment

### Using Docker (Recommended)

1. Update environment variables in `docker-compose.yml`
2. Run `docker-compose up -d`
3. Set up reverse proxy (nginx, Traefik) if needed

### Manual Deployment

1. Build the applications: `bun build`
2. Set up PostgreSQL database
3. Run database migrations: `bunx prisma migrate deploy`
4. Start the API server: `cd apps/api && bun start`
5. Deploy Next.js apps to your preferred platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Useful Links

- [Turborepo Documentation](https://turbo.build/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Bun Documentation](https://bun.sh/docs)