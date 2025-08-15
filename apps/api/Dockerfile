# Use Bun runtime for the API
FROM oven/bun:1.2.5-alpine AS base

# Set working directory
WORKDIR /app

# Copy root package.json and lockfile first
COPY package.json bun.lockb* yarn.lock* package-lock.json* ./

# Copy all package.json files to establish workspace structure
COPY apps/api/package.json ./apps/api/
COPY apps/web/package.json ./apps/web/
COPY apps/super-admin/package.json ./apps/super-admin/
COPY packages/db/package.json ./packages/db/
COPY packages/lib/package.json ./packages/lib/
COPY packages/ui/package.json ./packages/ui/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY packages/typescript-config/package.json ./packages/typescript-config/

# Install all dependencies from root (allow lockfile changes in Docker)
RUN bun install

# Copy all source code
COPY . .

# Generate Prisma client
WORKDIR /app/packages/db
RUN bun prisma generate

# Switch back to app directory
WORKDIR /app

# Expose port
EXPOSE 4000

# Set environment to production
ENV NODE_ENV=production

# Start the API server
CMD ["bun", "run", "apps/api/src/index.ts"]