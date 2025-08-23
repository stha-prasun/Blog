import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import useGetBlog from "../hooks/useGetBlog";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";

const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const fetchBlog = useGetBlog(id || null);
  const blog = useAppSelector((store) => store.Blog.blog);

  useEffect(() => {
    if (id) fetchBlog();
  }, [id, fetchBlog]);

  if (!blog) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Blog Header */}
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span className="mr-2">By Author</span>
          <span>•</span>
          <span className="ml-2">
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* Blog Image */}
        <img
          src={"https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1192&auto=format&fit=crop"}
          alt="Blog header"
          className="w-full h-72 object-cover rounded-lg mb-8 shadow-md"
        />

        {/* Blog Content */}
        <div className="prose dark:prose-invert max-w-none">
          <p>{blog.blog}</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
