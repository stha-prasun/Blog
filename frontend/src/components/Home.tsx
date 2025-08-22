import useGetAllBlogs from "../hooks/useGetAllBlogs";
import { useAppSelector } from "../redux/hooks";
import Navbar from "./Navbar";

const BLOG_IMG =
  "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Home = () => {
  useGetAllBlogs();

  const Blogs = useAppSelector((store) => store.Blogs.blogs);

  // Sidebar posts
  const featuredPosts = Blogs.slice(0, 3);
  const latestPosts = Blogs.slice(-3);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <section className="max-w-2xl mx-auto py-14 text-center">
        <div className="text-gray-500">Blog</div>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
          Discover our latest news
        </h1>
        <p className="text-gray-600 mb-6">
          Discover the achievements that set us apart. From groundbreaking
          projects to industry accolades, we take pride in our accomplishments.
        </p>
      </section>

      {/* Blog and Sidebar Section */}
      <main className="max-w-7xl mx-auto px-6 lg:flex gap-12">
        {/* Blogs */}
        <section className="flex-1">
          <h2 className="text-xl font-semibold mb-6">
            Whiteboards are remarkable.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white shadow-sm rounded-2xl overflow-hidden"
              >
                <img
                  src={BLOG_IMG}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 pb-6">
                  <div className="font-semibold mb-1">{blog.title}</div>
                  <div className="text-gray-600 text-sm">{blog.blog}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="w-full max-w-xs mt-12 lg:mt-0">
          {/* Featured */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold border-b pb-2 mb-6">
              Featured
            </h3>
            {featuredPosts.map((post) => (
              <div key={post._id} className="flex items-center mb-6">
                <img
                  src={BLOG_IMG}
                  alt={post.title}
                  className="w-14 h-14 object-cover rounded-lg mr-4"
                />
                <div>
                  <div className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {post.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Latest */}
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-6">Latest</h3>
            {latestPosts.map((post) => (
              <div key={post._id} className="flex items-center mb-6">
                <img
                  src={BLOG_IMG}
                  alt={post.title}
                  className="w-14 h-14 object-cover rounded-lg mr-4"
                />
                <div>
                  <div className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {post.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Home;
