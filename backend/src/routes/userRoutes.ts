import { Router } from "express";
import { signup } from "../controllers/userController";

const router: Router = Router();

router.post("/signup", signup);

export default router;
