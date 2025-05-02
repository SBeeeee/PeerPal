import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import  cookieParser from "cookie-parser";
import connectDB from "./db/database.js";
import Userrouter from "./routes/user.js"

const app=express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

const PORT=process.env.PORT || 3000;
app.use("/",Userrouter)

app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`);
})