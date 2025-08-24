import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLoggedInUser } from "../../redux/user";
import { useEffect } from "react";
import useGetAllBlogs from "../../hooks/useGetAllBlogs";

const AdminPanel = () => {
  const dispatch = useAppDispatch();
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

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-sm text-gray-500">Welcome, {user?.username}</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full text-left p-2 rounded-lg hover:bg-gray-100 font-medium">
            📊 Dashboard
          </button>
          <button onClick={()=>navigate("/admin/blog/add")} className="w-full text-left p-2 rounded-lg hover:bg-gray-100 font-medium">
            📝 Add Blogs
          </button>
        </nav>
        <div className="p-4 border-t">
          <button
            onClick={() => dispatch(setLoggedInUser(null))}
            className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 font-medium"
          >
            Logout
          </button>
        </div>
      </aside>

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
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600">
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
