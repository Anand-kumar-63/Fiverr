import express from "express"
import { jwtverify } from "../middlewares/jwtverify.js";
const messagerouter = express.Router();

// messagerouter.post("/",createGig);
// messagerouter.delete("/:id",deleteGig);
// messagerouter.get("/single/:id",getGig);
// messagerouter.get("/",jwtverify,getGigs);

export default messagerouter;