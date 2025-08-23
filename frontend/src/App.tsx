import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import AdminLogin from "./components/admin/AdminLogin";

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
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
