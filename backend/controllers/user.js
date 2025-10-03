import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../Models/user.js";

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
        const token = jwt.sign({ userId: user._id }, 'X9912', {
            expiresIn: '1h',
        });
        console.log(token);
        res.cookie("access_token",token,{
            httpOnly:true,
            expires:new Date(Date.now()+90000)
        }).send("Login succesfull");
    }
    catch (error) {
        console.log("Error in login please try again");
        res.status(400).json({
            message: "Login error"
        })
    }
}
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