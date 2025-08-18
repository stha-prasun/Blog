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

export const getAllBlogs = async (
  req: Request<{}, {}, {}>,
  res: Response
): Promise<Response> => {
  try {
    const blogs = await Blog.find();

    return res.status(200).json({
      blogs,
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

export const getBlogById = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Id not found",
        success: false,
      });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
        success: false,
      });
    }

    return res.status(200).json({
      blog,
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
