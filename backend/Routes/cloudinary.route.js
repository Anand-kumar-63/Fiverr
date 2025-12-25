import express from "express";
import Uploadcloudinary from "../utils/upload.cloudinary.js";

const cloudinaryrouter = express.Router();
cloudinaryrouter.post("/uplaod", Uploadcloudinary);

export default cloudinaryrouter;