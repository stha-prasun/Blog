import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import useGetAllBlogs from "../../hooks/useGetAllBlogs";
import axios from "axios";
import { BLOG_API_ENDPOINT } from "../../utils/constants";
import toast from "react-hot-toast";
import AdminSideBar from "./AdminSideBar";

const AdminPanel = () => {
  const navigate = useNavigate();

  const user = useAppSelector((store) => store.User.loggedInUser);
  const fetchBlogs = useGetAllBlogs();

  useEffect(() => {
    if (!user) {
      navigate("/admin");
      return;
    } else {
      fetchBlogs();
    }
  }, [user, navigate, fetchBlogs]);

  const blogs = useAppSelector((store) => store.Blogs.blogs);

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(`${BLOG_API_ENDPOINT}/delete/${id}`, {
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        fetchBlogs();
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSideBar/>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          <div className="text-gray-600">
            Logged in as: <span className="font-medium">{user?.username}</span>
          </div>
        </header>

        {/* Blog List */}
        <section>
          <h3 className="text-xl font-semibold mb-4">All Blogs</h3>
          {blogs.length === 0 ? (
            <p className="text-gray-500">No blogs available.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-left text-gray-700">
                    <th className="p-3 border-b">Title</th>
                    <th className="p-3 border-b">Author</th>
                    <th className="p-3 border-b">Date</th>
                    <th className="p-3 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-3 border-b">{blog.title}</td>
                      <td className="p-3 border-b">Admin</td>
                      <td className="p-3 border-b">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-3 border-b space-x-2">
                        <button
                          onClick={() => {
                            navigate(`/admin/blog/edit/${blog._id}`);
                          }}
                          className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
