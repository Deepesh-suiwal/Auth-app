import express from "express";
import { getMe } from "../controllers/authController.js";
import {authMiddleware} from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/me", authMiddleware, getMe);

export default router;
