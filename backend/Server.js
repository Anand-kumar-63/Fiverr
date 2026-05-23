import "dotenv/config";
import express from "express";
import ConnectDB from "./DBConnect.js";
import cors from "cors";
import userrouter from "./Routes/user.route.js";
import conversationRouter from "./Routes/Conversation.route.js";
import gigrouter from "./Routes/Gig.route.js";
import reviewrouter from "./Routes/review.route.js";
import orderrouter from "./Routes/order.route.js";
import authrouter from "./Routes/auth.route.js";
import messagerouter from "./Routes/message.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cloudinaryrouter from "./Routes/cloudinary.route.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Allow server-to-server tools (no Origin header) and listed dev URLs
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`CORS blocked request from origin: ${origin}`);
        callback(null, false);
      }
    },
    credentials: true,
   
  })
);
console.log("hello");


app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/auth", authrouter);
app.use("/cloud", cloudinaryrouter);
app.use("/user", userrouter);
app.use("/message", messagerouter);
app.use("/order", orderrouter);
app.use("/conversation", conversationRouter);
app.use("/gig", gigrouter);
app.use("/reviews", reviewrouter);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Something went wrong" });
});

ConnectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
      console.log(`CORS allowed origins: ${allowedOrigins.join(", ")}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  });
