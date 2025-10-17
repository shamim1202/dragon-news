import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>
  },
  {
    path: "/auth",
    element: <h3>Authentication Layout</h3>
  },
  {
    path: "/news",
    element: <h3>News Layout</h3>
  },
  {
    path: "/*",
    element: <h1>404 - Error layout</h1>
  }
]);

export default router
