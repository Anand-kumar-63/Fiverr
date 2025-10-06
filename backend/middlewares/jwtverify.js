import jwt from "jsonwebtoken";
export const jwtverify = async(req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token) res.status(403).send("Token not found");
    const payload = jwt.verify(token,process.env.JWT_KEY);
    if(!payload) res.status(402).send("Token is not valid");
    req.userId = payload.userId;
    next();
}