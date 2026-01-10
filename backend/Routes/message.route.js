import express from "express"
import { jwtverify } from "../middlewares/jwtverify.js";
import { createmessage , updatemessage , deletemessage } from "../controllers/message.controller.js";
const messagerouter = express.Router();

messagerouter.post("/",jwtverify,createmessage);
messagerouter.post("/:Id",jwtverify ,)

export default messagerouter;