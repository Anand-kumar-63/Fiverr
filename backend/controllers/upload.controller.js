import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});
const Uploadcloudinary = async (req, res) => {
    try {
        if (!req.file) {
            res.status(401).json({ message: "No file uploaded" });
        }
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "fiverr",
            resource_type: "auto"
        })
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