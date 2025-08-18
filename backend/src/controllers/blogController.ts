import { Request, Response } from "express";
import Blog from "../models/blogSchema";

interface BlogRequestBody {
  title: string;
  blog: string;
}

export const addBlog = async (
  req: Request<{}, {}, BlogRequestBody>,
  res: Response
): Promise<Response> => {
  try {
    const { title, blog } = req.body;

    if (!title || !blog) {
      return res.status(400).json({
        message: "Fields cannot be left empty",
        success: false,
      });
    }

    await Blog.create({
      title,
      blog,
    });

    return res.status(201).json({
      message: "Blog Added Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
