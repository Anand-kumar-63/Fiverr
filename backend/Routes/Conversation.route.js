import express from "express"
import { getConversation , updateConversation , getSingleConversation , createConversation } from "../controllers/conversation.controller.js";
import { jwtverify } from "../middlewares/jwtverify.js";
const conversationRouter = express.Router();

conversationRouter.post("/" , jwtverify , createConversation);
conversationRouter.post("/:Id" , updateConversation);
conversationRouter.get("/single/:Id", jwtverify , getSingleConversation)
conversationRouter.get("/", jwtverify , getConversation)

export default conversationRouter;