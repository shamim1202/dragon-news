import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json")
      },
    ],
  },
  {
    path: "/auth",
    element: <h3>Authentication Layout</h3>,
  },
  {
    path: "/news",
    element: <h3>News Layout</h3>,
  },
  {
    path: "/*",
    element: <h1>404 - Error layout</h1>,
  },
]);

export default router;
