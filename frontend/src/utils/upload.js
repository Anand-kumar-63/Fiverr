import axios from "axios";
const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_present", "fiverr");
    try {
        const respone = await axios.post(
            "https://api.cloudinary.com/"
        )
    }
    catch (error) {
        console.log("Error in uploading", error);
    }
}
export default upload;