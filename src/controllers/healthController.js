import { httpLogger } from "../loggers/httpLogger.js";
import { formatHTTPLoggerResponse } from "../utils/formatHTTPLoggerResponse.js";

class HealthController {
    checkHealth(req, res) {
        const data = {
            uptime: process.uptime(),
            message: "Ok",
            date: new Date(),
        };

        res.status(200).send(data);

        httpLogger.info(
            "Success message",
            formatHTTPLoggerResponse(req, res, data)
        );
    }
}

export default HealthController;
