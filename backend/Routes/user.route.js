import express from "express";
import { jwtverify } from "../middlewares/jwtverify.js";
import { updateUser } from "../controllers/user.controllers.js";
import {Login , Signup , Getuser, Deleteuser, updateUser} from "../controllers/user.controllers.js"
const router = express.Router({ mergeParams: true });

// user apis to signup , login , getuser , deleteuser
router.get("/getuser/:id", jwtverify , Getuser);
router.get("/delete/:id", jwtverify , Deleteuser)
router.post("update/:id",jwtverify , updateUser);

export default router;


