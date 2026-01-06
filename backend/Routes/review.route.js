import express from "express";
import jwtverify from "../middlewares/jwtverify";
import {createreview , getreview , updatereview }from "../controllers/review.controller";
const reviewrouter = express.Router();

reviewrouter.post("/", jwtverify ,createreview);
reviewrouter.get("/:Id", jwtverify , getreview);
reviewrouter.post("/",  jwtverify , updatereview);

export default reviewrouter;