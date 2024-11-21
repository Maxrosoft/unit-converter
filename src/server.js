import "dotenv/config";
import app from "./app.js";
import { serverLogger } from "./loggers/serverLogger.js";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    serverLogger.info(`Server running on http://localhost:${PORT}`);
});

server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        serverLogger.error(`Port ${PORT} is already in use.`);
    } else {
        serverLogger.error("Server error:", err);
    }
});

const gracefulShutdown = (signal) => {
    serverLogger.warn(`${signal} received. Shutting down gracefully...`);
};

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

process.on("uncaughtException", (err) => {
    serverLogger.error("Uncaught Exception:", err);
    process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
    serverLogger.error("Unhandled Rejection at:", promise, "reason:", reason);
    process.exit(1);
});
