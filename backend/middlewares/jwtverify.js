import jwt from "jsonwebtoken";
import CreatenewError from "../utils/createnewError.js";

export const jwtverify = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(CreatenewError(401, "Unauthorized user"));
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_KEY);
    req.userId = payload.userId;
    req.isSeller = payload.isSeller;
    next();
  } catch (error) {
    return next(CreatenewError(401, "Token is not valid"));
  }
};
