import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../Models/user.js";

// api to handle login
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            res.send("User not found");
        }
        const iscorrectpassword = bcrypt.compare(password, user.password, (error, result) => {
            if (error) {
                res.status(400).send(error, "Error in compairing the hashed password");
            }
            console.log(result);
        })
        if (iscorrectpassword) {
            res.status(400).send("wrong email or password");
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
            expiresIn: '1h',
        });
        res.cookie("access_token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 900000)
        }).send("Login succesfull");
    }
    catch (error) {
        console.log("Error in login please try again");
        res.status(400).json({
            message: "Login error"
        })
    }
}
// Api to handle singnup
export const Signup = async (req, res) => {
    try {
        console.log("hey there you are trying yo signup");
        const { password } = req.body;
        const data = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = new UserModel({
            ...data,
            password: hashedPassword,
        })
        newuser.save();
        if (!newuser) {
            console.log("Error in creating a user");
            res.status(500).send("Error in creating a user");
        }
        res.send(newuser);
    }
    catch (error) {
        console.log(error, "Error in creating a user");
        res.status(400).json({
            Message: error,
        })
    }
}

// api tp handle Getuser 
export const Getuser = async (req, res) => {
    try {
        const user = await UserModel.findOne();
        if (!user) {
            res.status(401).send("Error in getting the user");
        }
        res.status(200).json({
            message: "User found",
            user: user
        })
    }
    catch (error) {
        console.log(error, "Error in getting the user");
        res.status(400).json({
            message: error
        })
    }
}
// Api to handle the user deletions 
export const Deleteuser = async (req , res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) res.status(400).send("User not found");
        
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
        res.status(402).send("Error in deleting the user", error);
    }
}