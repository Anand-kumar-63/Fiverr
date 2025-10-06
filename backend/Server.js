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
app.use(cors());


app.use('/userapi', router);
app.use('/check', (req, res) => {
  res.send('Hello World from ES Modules Express!');
});

ConnectDB().then((result) => {
  app.listen(3000, () => {
    console.log("Server is running at the port 3000");
  })
}).catch((err) => {
  console.log(err, "Error in running to the server");
});