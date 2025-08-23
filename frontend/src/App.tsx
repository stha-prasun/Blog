import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";

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
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
