import dotenv from "dotenv";
import express from 'express';
import ConnectDB from './DBConnect.js';
import cors from 'cors'

import userrouter from "./Routes/user.route.js";
import conversationRouter from "./Routes/Conversation.route.js"
import gigRouter from "./Routes/Gig.route.js";
import reviewrouter from "./Routes/review.route.js";
import orderrouter from "./Routes/order.route.js";
import authrouter  from "./Routes/auth.route.js";
import messagerouter from "./Routes/message.route.js";
import cookieParser from "cookie-parser"

const app = express();
dotenv.config();
app.use(cookieParser()); // middleware
app.use(express.json()); // middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
// User Auth Routes 
app.use("/auth",authrouter)
app.use('/user', userrouter);
app.use("/message", messagerouter);
app.use("/order", orderrouter);
app.use("/conversation", conversationRouter);
app.use("/gig", gigRouter);
app.use("/reviews", reviewrouter);


app.use('/check', (req, res) => {
  res.send('Hello World from ES Modules Express!');
});
//Error handleing Middleware
app.use((err, req, res, next) => {
  console.log("Error middleware:");
  res.status(400).send(err.message);
})

ConnectDB().then((result) => {
  app.listen(3000, () => {
    console.log("Server is running at the port 3000");
  })
}).catch((err) => {
  console.log(err, "Error in running to the server");
});