import express from "express";
import { auth } from "../middleware/authMiddleWare.js";
import { createtask } from "../controllers/tasks.js";

const router=express.Router();

router.post("/create",auth,createtask);

export default router;