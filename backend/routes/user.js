import express from "express";
import { register,login,logout,profile } from "../controllers/User.js";
import { auth } from "../middleware/authMiddleWare.js";

const router=express.Router();
router.post("/signup",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/profile",auth,profile)

export default router;