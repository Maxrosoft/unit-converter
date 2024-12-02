import express from "express";
import ConverterController from "../controllers/converterController.js";

const controller = new ConverterController();

const router = express.Router();

router.get(["/length", "/weight", "/temperature"], controller.getControllerByPath);

router.post("/convert", controller.makeConversion);

router.get("*", controller.getDefault);

export default router;
