import express from "express";
import {jwtverify} from "../middlewares/jwtverify.js";
import {createreview , getreview }from "../controllers/review.controller.js";
const reviewrouter = express.Router();
reviewrouter.post("/create", jwtverify ,createreview);
reviewrouter.get("/get", jwtverify , getreview);
reviewrouter.get("/",(req,res)=>{res.send("hey")});
// reviewrouter.post("/update",  jwtverify , updatereview);
export default reviewrouter;