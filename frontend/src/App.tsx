import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import AdminLogin from "./components/admin/AdminLogin";
import AdminPanel from "./components/admin/AdminPanel";
import AddBlog from "./components/admin/AddBlog";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog/:id",
      element: <Blog />,
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/admin/home",
      element: <AdminPanel />,
    },
    {
      path: "/admin/blog/add",
      element: <AddBlog />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
