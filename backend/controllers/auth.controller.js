import UserModel from "../Models/user.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import CreatenewError from "../utils/createnewError.js";

// export const Login = async (req, res, next) => {
//     try {
//         console.log("logging in.....");
//         const { email, password } = req.body;
//         const user = await UserModel.findOne({ email: email });
//         if (!user) {
//             res.status(400).send("User not found");
//       }

//        when you are dealing with async function use async await 
//        Instead of callbacks either use async await or .then and     catch 

//         const iscorrectpassword = bcrypt.compare(password, user.    password , (error, result) => {
//             if (error) return next(error);
//             console.log(result);
//         })
//         if (!iscorrectpassword) {
//            res.status(400).send("credentials invalid");
//         }
//         const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, 
//         {
//             expiresIn: '1h',
//         }
//         );
//         res.cookie("access_token", token, {
//             httpOnly: true,
//             expires: new Date(Date.now() + 900000)
//         }).json({
//             message: "Login successfull",
//             user: user
//         })
//     }
//     catch (error) {
//         console.log("Error in login please try again");
//         return next(new Error("Login Error"));
//     }
// }

export const Login = async (req, res, next) => {
    try {
        console.log("logging in.....");
        const { email, password } = req.body;
        console.log(req.body);
        const user = await UserModel.findOne({ email: email });
        console.log(user);
        if (!user) {
            return res.status(400).json({ message: "User not found 1" });
        }
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!isCorrectPassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
            { 
              userId: user._id,
              isSeller:user.isSeller  
             
            },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
        );
        res.cookie("access_token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 60 * 60 * 1000),
        });
        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                email: user.email,
                username: user.username,
                image:user.image,
                isSeller:user.isSeller
            },
        });
    } catch (error) {
        return next(error);
    }
};


// Api to handle singnup
export const Signup = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const data = req.body;
        console.log(req.body);
        const existinguser = await UserModel.findOne({ email });
        if (existinguser) {
            res.status(400).send("User already exist with the provided email Id");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = new UserModel({
            ...data,
            password: hashedPassword,
        })
        newuser.save()
        return res.send(newuser);
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

export const Logout = (req, res, next) => {
    try {
        res.clearCookie("access_token", {
            samesite: "none",
            secure: true,
            httpOnly: true
        }).status(200).send("user Loggedout");
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Error in logout"
        })
    }
}