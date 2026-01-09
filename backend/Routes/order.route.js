import express from "express"
import { jwtverify } from "../middlewares/jwtverify.js"
import { createOrder, getOrders } from "../controllers/order.controller.js";
const orderrouter = express.Router();

orderrouter.post("/:gigId", jwtverify , createOrder);
orderrouter.get("/", jwtverify , getOrders);

export default orderrouter;