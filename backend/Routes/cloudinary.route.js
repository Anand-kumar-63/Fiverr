import express from "express";
import Uploadcloudinary from "../controllers/upload.controller.js";
import upload from "../middlewares/multer.middleware.js";
const cloudinaryrouter = express.Router();
cloudinaryrouter.post("/upload", upload.single("file") , Uploadcloudinary);
export default cloudinaryrouter;