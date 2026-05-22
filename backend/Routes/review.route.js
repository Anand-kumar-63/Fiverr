import express from "express";
import { jwtverify } from "../middlewares/jwtverify.js";
import { createreview, getreview, deletereview } from "../controllers/review.controller.js";

const reviewrouter = express.Router();

reviewrouter.post("/", jwtverify, createreview);
reviewrouter.get("/:Id", getreview);
reviewrouter.delete("/", jwtverify, deletereview);

export default reviewrouter;
