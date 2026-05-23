import UserModel from "../Models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import CreatenewError from "../utils/createnewError.js";
import { authCookieOptions } from "../utils/cookieOptions.js";

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        userId: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
    res.cookie("access_token", token, authCookieOptions);
    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
        image: user.image,
        isSeller: user.isSeller,
      },
    });
  } catch (error) {
    return next(error);
  }
};

export const Signup = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password, ...data } = req.body;
    const existinguser = await UserModel.findOne({ email });
    if (existinguser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = new UserModel({
      ...data,
      email,
      password: hashedPassword,
    });
    const saved = await newuser.save();
    return res.status(201).json(saved);
  } catch (error) {
    if (error.code === 11000) {
      error.status = 400;
      error.message = "User already exists";
    }
    return next(error);
  }
};

export const Logout = (req, res) => {
  res
    .clearCookie("access_token", authCookieOptions)
    .status(200)
    .json({ message: "User logged out" });
};
