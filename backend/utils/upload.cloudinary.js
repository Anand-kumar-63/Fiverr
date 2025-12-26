// import { v2 as cloudinary } from "cloudinary";
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET,
//     secure: true
// });

// const Uploadcloudinary = async (req , res) => {
//     try {
//         const image = req.body.data;
//         console.log(image);
//         const result = await cloudinary.uploader.upload(image, {
//             resource_type: "auto",
//         });
//         console.log("Upload successful:", result.public_id);
//         console.log(result.secure_url);
//         return res.status(200).send(result.secure_url);
//     }
//     catch (error) {
//         console.log("Upload failed", error);
//     }
// }

// export default Uploadcloudinary;