// apps/api/src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./utils/logger";

// Import routes
import authRoutes from "./routes/auth.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middleware/error.middleware"; // Add missing user routes
import { prismaClient as prisma } from "@repo/db/client";
import standupRoutes from "./routes/standup.routes.ts";
import helmet from "helmet";

dotenv.config();
const app = express();
app.use(helmet())
// Add JSON body parser middleware
app.use(express.json());

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

// Mount routes
app.use('/api/auth', authRoutes);

app.use('/api/users', userRoutes); // Mount user routes
app.use('/api/dashboard', dashboardRoutes);
app.use("/api/standups", standupRoutes)
// app.use('/api/teams', teamRoutes);


// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" })
})
// Error handling middleware
app.use(errorHandler)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', async(error) => {
    logger.error('Uncaught Exception', { error: error.stack });
    await prisma.$disconnect()
    process.exit(1);
});

// Handle unhandled rejections
process.on('unhandledRejection', async(reason, promise) => {
    logger.error('Unhandled Rejection', { reason, promise });
  await prisma.$disconnect()
    process.exit(1);
});
