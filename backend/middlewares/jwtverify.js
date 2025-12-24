import jwt from "jsonwebtoken";
import CreatenewError from "../utils/createnewError.js";
export const jwtverify = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(CreatenewError(400, "Unathuorised user"));
    try {
        const payload = jwt.verify(token, process.env.JWT_KEY);
        if (!payload) res.status(402).send("Token is not valid");
        req.userId = payload.userId;
        next();
    } catch (error) {
        next(CreatenewError(400,"Token is not valid"));
    }
}