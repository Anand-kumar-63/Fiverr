import express from "express";
import {jwtverify} from "../middlewares/jwtverify.js";
import {createreview , getreview }from "../controllers/review.controller.js";

const reviewrouter = express.Router();
reviewrouter.post("/", jwtverify ,createreview);
reviewrouter.get("/:gigId", jwtverify , getreview);
export default reviewrouter;

