import { httpLogger } from "../loggers/httpLogger.js";

const formatHTTPLoggerErrorResponse = (err, req, res) => {
    return {
        error: {
            message: err.message,
            stack: err.stack,
        },
        request: {
            headers: req.headers,
            host: req.headers.host,
            baseUrl: req.baseUrl,
            url: req.url,
            method: req.method,
            body: req.body,
            params: req?.params,
            query: req?.query,
        },
        response: {
            headers: res.getHeaders(),
        },
    };
};

export const errorHandler = (err, req, res, next) => {
    httpLogger.error("Error message", formatHTTPLoggerErrorResponse(err, req, res));

    res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
};