import express from "express"
import { jwtverify } from "../middlewares/jwtverify.js";
import { createmessage , updatemessage , deletemessage, getmessages } from "../controllers/message.controller.js";
const messagerouter = express.Router();

messagerouter.post("/",jwtverify,createmessage);
messagerouter.get("/:Id",jwtverify,getmessages)

export default messagerouter;   