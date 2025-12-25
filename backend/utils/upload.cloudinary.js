import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});

const Uploadcloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file);
        console.log("Upload successful:", result.public_id);
        console.log(result.secure_url);
        return result
    }
    catch (error) {
        console.log("Upload failed" , error);
    }
}

