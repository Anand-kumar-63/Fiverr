import express from "express"
import { Login , Signup } from "../controllers/auth.controller.js";
const authrouter = express.Router();

authrouter.post("/regsiter", Signup);
authrouter.post("/login", Login);

export default authrouter;

