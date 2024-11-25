class HealthController {
    checkHealth(req, res, next) {
        try {
            const data = {
                uptime: process.uptime(),
                message: "Ok",
                date: new Date(),
            };

            res.status(200).send(data);
        } catch (error) {
            next(error);
        }
    }
}

export default HealthController;
