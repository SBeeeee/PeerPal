import express from "express";
import { register } from "../controllers/User.js";

const router=express.Router();
router.post("/signup",register);

export default router;