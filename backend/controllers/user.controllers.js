import UserModel from "../Models/user.js";
import CreatenewError from "../utils/createnewError.js";
// api tp handle Getuser 
export const Getuser = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            next(CreatenewError("No such user exists"))
        }
        res.status(200).json({
            succes: true,
            message: "User Found",
            user: user
        })
    }
    catch (error) {
        console.log(error, "Error in getting the user");
        next(CreatenewError("Get user Error"));
    }
}

// Api to handle the user deletion 
import jwt from "jsonwebtoken";

export const Deleteuser = async (req, res) => {
    try {
        const userId = req.params.id;
        const existingUser = await UserModel.findById(userId);
        if (!existingUser){
            return res.status(404).send("User does not exist");
        }
        const token = req.cookies.access_token;
        if (!token) {

            return res.status(401).send("Unauthorized user");
        
        }
        let payload;
        try {
            payload = jwt.verify(token, process.env.JWT_KEY);
        } catch (err) {
            return res.status(403).send("Invalid or expired token");
        }
        if (payload.userId !== existingUser._id.toString()) {
            return res.status(403).send("You can only delete your own account");
        }
        await UserModel.findByIdAndDelete(userId);
        res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: "Error deleting the user",
            error: err.message,
        });
    }
};


export const updateUser = (req, res) => {
    try {
        
     

    }
    catch (error) {

    }
}