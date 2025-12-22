
import UserModel from "../Models/user.js";

// api to handle login

// api tp handle Getuser 
export const Getuser = async ( req , res , next ) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            next(new Error("No such user exists"))
        }
        res.status(200).json({
            succes: true,
            message: "User Found",
            user: user
        })
    }
    catch (error) {
        console.log(error, "Error in getting the user");
        next(new Error("Get user Error"));
    }
}

// Api to handle the user deletions 
export const Deleteuser = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) next(new Error("Error in delete user"));

        if (user._id.toString() !== req.userId) {
            res.send("You can delete only your account");
        }
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Deleted"
        })
    }
    catch (error) {
        next(new Error("Error Delete USER:"))
    }
}

export const updateUser = (req,res)=>{
    try{

    }
    catch(error){

    }
}