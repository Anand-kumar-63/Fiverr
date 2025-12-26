import { v2 as cloudinary } from "cloudinary";

import env from "../config/env.js";

cloudinary.config({
    cloud_name: env.CLOUD_NAME,
    api_key: env.API_KEY,
    api_secret: env.API_SECRET,
    secure: true
});

console.log(process.env.API_KEY)
const Uploadcloudinary = async (req, res) => {
    try {
        console.log(req.file);
        if (!req.file) {
            res.status(401).json({ message: "No file uploaded" });
        }
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "fiverr",
            resource_type: "auto"
        })
        console.log(result);
        res.status(200).json({
            public_Id: result.public_id,
            url: result.secure_url
        })
    } catch (error) {
        console.log("upload failed", error);
        res.status(400).json({
            message: "upload failed",
        })
    }
}
export default Uploadcloudinary;
