import express from "express"
import { jwtverify } from "../middlewares/jwtverify.js";
import { createGig, updateGig, getGig, getGigs, deleteGig } from "../controllers/gig.controller.js";
const gigrouter = express.Router();
gigrouter.post("/", createGig);
gigrouter.delete("/:id", deleteGig);
gigrouter.get("/single/:id", jwtverify , getGig);
gigrouter.get("/", jwtverify , getGigs);
gigrouter.post("/update",jwtverify , updateGig);
export default gigrouter;