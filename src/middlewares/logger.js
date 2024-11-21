import { httpLogger } from "../loggers/httpLogger.js";

const formatHTTPLoggerResponse = (req, res, responseBody) => {
    return {
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
            statusCode: res.statusCode,
        },
    };
};

export const logger = (req, res, next) => {
    httpLogger.info("Success message", formatHTTPLoggerResponse(req, res));
    next();
};
