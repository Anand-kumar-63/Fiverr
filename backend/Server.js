import dotenv from "dotenv";
import express from 'express';
import ConnectDB from './DBConnect.js';
import cors from 'cors'
import router from "./Routes/userroute.js";
import cookieParser from "cookie-parser";
const app = express();
// const corsOptions = {
//   origin:"",
//   Credentials:true
// }
dotenv.config();
app.use(cookieParser()); // middleware
app.use(express.json()); // middleware
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));

// User Auth Routes 
app.use('/userapi', router);
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