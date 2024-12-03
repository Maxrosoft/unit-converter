import { expect } from "chai";
import request from "supertest";
import express from "express";
import healthRouter from "../src/routes/health.js";
import converterRouter from "../src/routes/converter.js";
import apiRouter from "../src/routes/api.js";
import path from "path";

describe("Unit Converter App", () => {
    const app = express();

    app.set("view engine", "ejs");
    app.set("views", path.join(import.meta.dirname, "../src/views"));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(healthRouter);
    app.use(converterRouter);
    app.use("/api", apiRouter);

    it("health check", async () => {
        const response = await request(app).get("/health");
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("message");
        expect(response.body.message).to.equal("Ok");
    });

    it("converter: get default page (redirect to /length)", async () => {
        const response = await request(app).get("/");
        expect(response.status).to.equal(302);
    });

    it("converter: get length page", async () => {
        const response = await request(app).get("/length");
        expect(response.status).to.equal(200);
    });

    it("converter: get weight page", async () => {
        const response = await request(app).get("/weight");
        expect(response.status).to.equal(200);
    });

    it("converter: get temperature page", async () => {
        const response = await request(app).get("/temperature");
        expect(response.status).to.equal(200);
    });

    it("converter: make conversion", async () => {
        const payload = { value: 100, from: "cm", to: "m", active: "length" };
        const response = await request(app)
            .post("/convert")
            .set("accept", "application/json")
            .send(payload);

        expect(response.status).to.equal(200);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.body).to.have.property("result");
        expect(response.body.result).to.equal(1);
    });

    it("api: get units", async () => {
        const response = await request(app).get("/api/units");

        expect(response.status).to.equal(200);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.body).to.have.property("Length");
        expect(response.body).to.have.property("Mass");
        expect(response.body).to.have.property("Temperature");
    });

    it("api: make conversion", async() => {
        const payload = { value: 100, from: "cm", to: "m", active: "length" };
        const response = await request(app)
            .post("/api/convert")
            .send(payload);

        expect(response.status).to.equal(200);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.body).to.have.property("result");
        expect(response.body.result).to.equal(1);    })
});
