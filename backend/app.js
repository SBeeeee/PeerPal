import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import  cookieParser from "cookie-parser";
import connectDB from "./db/database.js";
import Userrouter from "./routes/user.js"
import taskrouter from "./routes/tasks.js";
import cors from  "cors";

const app=express();
dotenv.config();
connectDB();
const allowedOrigins = [
    process.env.localurl,
    process.env.devurl
    
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

const PORT=process.env.PORT || 3000;
app.use("/",Userrouter)
app.use("/task",taskrouter)



app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`);
})