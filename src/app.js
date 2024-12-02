import express from "express";
import bodyParser from "body-parser";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import healthRouter from "./routes/health.js";
import converterRouter from "./routes/converter.js";
import apiRouter from "./routes/api.js";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "/views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use(healthRouter);
app.use(converterRouter);
app.use("/api", apiRouter);

app.use(errorHandler);

export default app;
