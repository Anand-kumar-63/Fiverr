import express from "express";
import { jwtverify } from "../middlewares/jwtverify.js";
// import { updateUser } from "../controllers/user.controllers.js";
import {Getuser, Deleteuser, updateUser} from "../controllers/user.controllers.js"
const userrouter = express.userrouter({ mergeParams: true });

// user apis to signup , login , getuser , deleteuser
userrouter.get("/getuser/:id", jwtverify , Getuser);
userrouter.get("/delete/:id", jwtverify , Deleteuser)
userrouter.post("update/:id",jwtverify , updateUser);

export default userrouter;


