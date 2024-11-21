import { expect } from "chai";
import request from "supertest";
import express from "express";
import healthRouter from "../src/routes/health.js";

describe("Unit Converter App", () => {
    const app = express();
    app.use(healthRouter);

    it("health check", async () => {
        const response = await request(app).get("/health");
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("message");
        expect(response.body.message).to.equal("Ok");
    });
});
