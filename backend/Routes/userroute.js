import express from "express";
import { jwtverify } from "../middlewares/jwtverify.js";
import {Login , Signup , Getuser, Deleteuser} from "../controllers/user.js"
const router = express.Router({ mergeParams: true });

// user apis to signup , login , getuser , deleteuser
router.post("/Signup", Signup);
router.post("/Login", Login);
router.get("/getuser/:id", Getuser);
router.get("/delete/:id", jwtverify , Deleteuser)

export default router;