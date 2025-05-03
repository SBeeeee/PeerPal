import express from "express";
import { auth } from "../middleware/authMiddleWare.js";
import { createtask,gettasks } from "../controllers/tasks.js";

const router=express.Router();

router.post("/create",auth,createtask);
router.get("/alltasks",gettasks)

export default router;