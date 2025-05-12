import express from "express";
import { auth } from "../middleware/authMiddleWare.js";
import { createrental,getRentals,myrentals ,requested,createrequest} from "../controllers/rental.js";

const router=express.Router();

router.post("/create",auth,createrental);
router.get("/allrentals",getRentals);
router.get("/myrentals",auth,myrentals);
router.get("/requested",requested);
router.post("/postrequest",auth,createrequest);

export default router;