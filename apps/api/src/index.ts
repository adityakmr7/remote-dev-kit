import express  from 'express';
import type {Request,Response} from 'express';
import authRoutes from "./routes/auth.routes.ts";
import standupRoutes from "./routes/standup.routes.ts";
import cors from 'cors';
import dotenv from 'dotenv';
import manualRoutes from "./routes/manual.routes.ts";
import dashboardRoutes from "./routes/dashboard.routes.ts";

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


app.use('/api/auth', authRoutes);
app.use('/api/standups', standupRoutes);
app.use('/api/auth/manual', manualRoutes);
app.use('/api/dashboard', dashboardRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
