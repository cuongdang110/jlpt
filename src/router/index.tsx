import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Hiragana, Katakana } from "../pages";

const router = createBrowserRouter([
  {
    path: "/hiragana",
    element: <Hiragana />,
  },
  {
    path: "/katakana",
    element: <Katakana />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
