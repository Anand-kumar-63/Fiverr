import express from "express"
import { Login, Signup } from "../controllers/auth.controller";
const router = express.Router();

router.post("/regsiter", Signup);
router.post("/login", Login);

export default router;

