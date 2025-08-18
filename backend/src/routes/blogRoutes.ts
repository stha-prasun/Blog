import { Router } from "express";
import { addBlog } from "../controllers/blogController";

const router: Router = Router();

router.post("/add", addBlog);

export default router;
