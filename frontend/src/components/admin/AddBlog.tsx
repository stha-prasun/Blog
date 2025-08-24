import { useState } from "react";
import axios from "axios";
import { BLOG_API_ENDPOINT } from "../../utils/constants";
import toast from "react-hot-toast";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BLOG_API_ENDPOINT}/add`,
        {
          title,
          blog,
        },
        { withCredentials: true }
      );
      if (res.data.success) {
        setTitle("");
        setBlog("");
        toast.success(res.data.message);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">📝 Add New Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Blog Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Blog Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Blog Content
          </label>
          <textarea
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
            rows={6}
            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Write your blog here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
