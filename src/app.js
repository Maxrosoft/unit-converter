import express from "express";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import healthRouter from "./routes/health.js";
import converterRouter from "./routes/converter.js";
import apiRouter from "./routes/api.js";

const app = express();

app.set("view engine", "ejs");

app.use(logger);

app.use(healthRouter);
app.use(converterRouter);
app.use("/api", apiRouter);

app.use(errorHandler);

export default app;
