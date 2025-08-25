import { Router } from "express";
import { addBlog, deleteBlog, editBlog, getAllBlogs, getBlogById } from "../controllers/blogController";
import isAuthenticated from "../middleware/isAuthenticated";

const router: Router = Router();

router.post("/add", isAuthenticated, addBlog);

router.get("/get/all", getAllBlogs);

router.get("/get/:id", getBlogById);

router.delete("/delete/:id", isAuthenticated, deleteBlog);

router.patch("/edit/:id", isAuthenticated, editBlog);

export default router;
