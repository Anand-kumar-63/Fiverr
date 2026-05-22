import express from "express";
import { jwtverify } from "../middlewares/jwtverify.js";
import {
  createGig,
  updateGig,
  getGig,
  getGigs,
  deleteGig,
} from "../controllers/gig.controller.js";

const gigrouter = express.Router();

gigrouter.post("/", jwtverify, createGig);
gigrouter.delete("/:id", jwtverify, deleteGig);
gigrouter.get("/single/:id", getGig);
gigrouter.get("/", getGigs);
gigrouter.put("/:id", jwtverify, updateGig);

export default gigrouter;
