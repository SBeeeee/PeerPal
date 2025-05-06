import express from "express";
import { auth } from "../middleware/authMiddleWare.js";
import { createrental,getRentals,myrentals } from "../controllers/rental.js";

const router=express.Router();

router.post("/create",auth,createrental);
router.get("/allrentals",getRentals);
router.get("/myrentals",auth,myrentals);

export default router;