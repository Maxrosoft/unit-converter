import express from "express";
import HealthController from "../controllers/healthController.js";

const controller = new HealthController();

const router = express.Router();

router.get("/health", controller.checkHealth);

export default router;