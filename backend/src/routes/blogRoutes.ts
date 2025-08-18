import { Router } from "express";
import { addBlog, getAllBlogs, getBlogById } from "../controllers/blogController";

const router: Router = Router();

router.post("/add", addBlog);

router.get("/get/all", getAllBlogs);

router.get("/get/:id", getBlogById);

export default router;
