import express from "express";
import { auth } from "../middleware/authMiddleWare.js";
import { createride,getallRides } from "../controllers/Rideshare.js";

const router=express.Router();

router.post("/create",auth,createride);
router.get("/getallrides",getallRides);

export default router;