import express from "express";
import { auth } from "../middleware/authMiddleWare.js";
import { createtask,gettasks,mytasks } from "../controllers/tasks.js";

const router=express.Router();

router.post("/create",auth,createtask);
router.get("/alltasks",gettasks);
router.get("/mytasks",auth,mytasks);

export default router;