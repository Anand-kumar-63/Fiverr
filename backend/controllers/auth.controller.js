import UserModel from "../Models/user"
import jwt from "jsonwebtoken";
import bcrypt from "brcypt";

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
export const Signup = async ( req , res , next ) => {
    try {
        const { email  , password } = req.body;
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