import express from "express";
import {
  getConversation,
  updateConversation,
  getSingleConversation,
  createConversation,
} from "../controllers/conversation.controller.js";
import { jwtverify } from "../middlewares/jwtverify.js";

const conversationRouter = express.Router();

conversationRouter.post("/", jwtverify, createConversation);
conversationRouter.put("/:Id", jwtverify, updateConversation);
conversationRouter.get("/single/:id", jwtverify, getSingleConversation);
conversationRouter.get("/", jwtverify, getConversation);

export default conversationRouter;
