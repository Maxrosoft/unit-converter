import express from "express";
import { logger } from "./middlewares/logger.js";
import healthRouter from "./routes/health.js";

const app = express();

app.use(logger);
app.use(healthRouter);

export default app;
