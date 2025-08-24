import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLoggedInUser } from "../../redux/user";
import { useEffect } from "react";

const AdminPanel = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((store) => store.User.loggedInUser);

  useEffect(() => {
    if (!user) {
      navigate("/admin");
    }
  }, [user]);

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
          <button className="w-full text-left p-2 rounded-lg hover:bg-gray-100 font-medium">
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
      </main>
    </div>
  );
};

export default AdminPanel;
