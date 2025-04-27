// apps/api/src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./utils/logger";

// Import routes
import authRoutes from "./routes/auth.routes";
import standupRoutes from "./routes/standup.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import teamRoutes from "./routes/team.routes";
import userRoutes from "./routes/user.routes"; // Add missing user routes

dotenv.config();
const app = express();

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
app.use('/api/standups', standupRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/users', userRoutes); // Mount user routes

// 404 handler
// app.use('*', (req: Request, res: Response) => {
//     res.status(404).json({ status: 'error', message: 'Route not found' });
// });

// Error handler - should be the last middleware
// app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    logger.error('Uncaught Exception', { error: error.stack });
    process.exit(1);
});

// Handle unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection', { reason, promise });
    process.exit(1);
});
