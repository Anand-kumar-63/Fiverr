import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { CreatenewError } from "../utils/createnewError.js";
import UserModel from "../Models/user.js";

// api to handle login
export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            res.send("User not found");
        }
        const iscorrectpassword = bcrypt.compare(password, user.password, (error, result) => {
            if (error) { next(error); }
            console.log(result);
        })
        if (iscorrectpassword) {
            next(new Error("Invalid Email or password"));
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
            expiresIn: '1h',
        });
        console.log(user);
        res.cookie("access_token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 900000)
        }).json({
            message:"Login successfull",
            user:user
        })
     }
    catch (error) {
        console.log("Error in login please try again");
        next(new Error("Login Error"));
    }
}
// Api to handle singnup
export const Signup = async (req, res, next) => {
    try {
        const { email } = req.body;
        console.log("Signup");
        const { password } = req.body;
        const data = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = new UserModel({
            ...data,
            password: hashedPassword,
        })
        newuser.save()
        res.send(newuser);
    }
    catch (error) {
        if (err.code === 11000) {
            err.statusCode = 400;
            err.message = "User already exists";
        }
        console.log(error, "Error in creating a user");
        next(error);
    }
}

// api tp handle Getuser 
export const Getuser = async (req, res, next) => {
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
            payload,
            message: "Deleted"
        })
    }
    catch (error) {
        next(new Error("Error Delete USER:"))
    }
}
export const Logout = () => {
    try {
        res.clearCookie("access_token",{
            samesite:"none",
            secure:true
        }).status(200).send("user Loggedout");
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            message:"Error in logout"
        })
    }
}