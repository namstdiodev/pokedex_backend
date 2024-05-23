import { Router } from "express";
import { signup_post, login_post } from "../controllers/auth.controller";
const router = Router();


router.post('/signup',signup_post)
router.post('/login', login_post)

export default router