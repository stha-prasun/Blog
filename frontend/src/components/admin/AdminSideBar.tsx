import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const AdminSideBar = () => {
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.User.loggedInUser);

  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        <p className="text-sm text-gray-500">Welcome, {user?.username}</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <button onClick={()=>navigate("/admin/home")} className="w-full text-left p-2 rounded-lg hover:bg-gray-100 font-medium">
          📊 Dashboard
        </button>
        <button
          onClick={() => navigate("/admin/blog/add")}
          className="w-full text-left p-2 rounded-lg hover:bg-gray-100 font-medium"
        >
          📝 Add Blogs
        </button>
      </nav>
      <div className="p-4 border-t">
        <button className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 font-medium">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSideBar;
