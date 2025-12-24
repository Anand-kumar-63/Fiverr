import express from "express"
import { Login , Logout, Signup } from "../controllers/auth.controller.js";
const authrouter = express.Router();

authrouter.post("/register", Signup);
authrouter.post("/login", Login);
authrouter.post("/logout", Logout);

export default authrouter;

