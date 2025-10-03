import express from "express";
import {Login , Signup , Getuser} from "../controllers/user.js"
const router = express.Router({ mergeParams: true });

router.post("/Signup", Signup);
router.post("/Login", Login);
router.get("/get", Getuser);

export default router;