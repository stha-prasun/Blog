import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import useGetAllBlogs from "../hooks/useGetAllBlogs";
import Navbar from "./Navbar";
import { useEffect } from "react";

const BLOG_IMG =
  "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0";

export default function Blog() {
  const navigate = useNavigate();
  const fetchBlogs = useGetAllBlogs();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const Blogs = useAppSelector((store) => store?.Blogs.blogs || []);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-10 shadow-lg">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
            <p className="text-lg max-w-2xl">
              Explore hand-picked articles to inspire your journey.
            </p>
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Blog List */}
          <section className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {Blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <img
                    src={BLOG_IMG}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-semibold text-xl text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                      {blog.blog}
                    </p>
                    <button
                      onClick={() => navigate(`/blog/${blog._id}`)}
                      className="mt-4 w-max px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Featured Section */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-4">Featured</h3>
              <ul className="space-y-3 text-sm">
                {Blogs.slice(0, 3).map((blog) => (
                  <li
                    key={blog._id}
                    onClick={() => navigate(`/blog/${blog._id}`)}
                    className="hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    {blog.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Section */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-4">Latest Posts</h3>
              <ul className="space-y-4 text-sm">
                {Blogs.slice(-5).map((blog) => (
                  <li
                    key={blog._id}
                    onClick={() => navigate(`/blog/${blog._id}`)}
                    className="flex items-start gap-3 hover:bg-gray-50 rounded-lg p-2 cursor-pointer transition-colors"
                  >
                    <img
                      src={BLOG_IMG}
                      alt="thumb"
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <p className="line-clamp-2">{blog.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
