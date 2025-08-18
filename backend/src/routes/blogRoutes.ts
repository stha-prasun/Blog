import { Router } from "express";
import { addBlog, getAllBlogs } from "../controllers/blogController";

const router: Router = Router();

router.post("/add", addBlog);

router.get("/get/all", getAllBlogs);

export default router;
