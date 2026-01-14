import express from "express"
import { jwtverify } from "../middlewares/jwtverify.js"
import { getOrders, paymentIntent , confirm } from "../controllers/order.controller.js";
const orderrouter = express.Router();

// orderrouter.post("/:gigId", jwtverify , createOrder);
orderrouter.post("/create-payment-intent/:Id" , jwtverify  , paymentIntent );
orderrouter.get("/", jwtverify , getOrders);
orderrouter.put("/",jwtverify,confirm);

export default orderrouter;