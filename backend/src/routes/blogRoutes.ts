import { Router } from "express";
import { addBlog, deleteBlog, editBlog, getAllBlogs, getBlogById } from "../controllers/blogController";

const router: Router = Router();

router.post("/add", addBlog);

router.get("/get/all", getAllBlogs);

router.get("/get/:id", getBlogById);

router.delete("/delete/:id", deleteBlog);

router.patch("/edit/:id", editBlog);

export default router;
