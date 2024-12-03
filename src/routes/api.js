import express from "express";
import APIController from "../controllers/apiController.js";

const controller = new APIController();

const router = express.Router();

router.get("/units", controller.getUnits);
router.post("/convert", controller.postConvert);

export default router;
