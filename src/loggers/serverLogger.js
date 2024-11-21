import winston from "winston";
import path from "path";

const { combine, timestamp, json} = winston.format;
const timestampFormat = "MMM-DD-YYYY HH:mm:ss";

export const serverLogger = winston.createLogger({
    level: "info",
    format: combine(
        timestamp({ format: timestampFormat }),
        json()
    ),
    transports: [
        new winston.transports.File({
            filename: path.join("logs/server.log"),
        }),
        new winston.transports.Console(),
    ],
});