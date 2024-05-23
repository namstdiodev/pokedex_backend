import { Router } from "express";
import validateAuth from '../middlewares/auth.middleware'
import userRouter from "./user.route";
import authRouter from "./auth.route";
const router = Router();

router.use("/auth", authRouter);
router.use("/users", validateAuth , userRouter);
export default router;
