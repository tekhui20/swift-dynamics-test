import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Test1 from "../Pages/test1";
import Test2 from "../Pages/test2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "test1",
        element: <Test1 />,
      },
      {
        path: "test2",
        element: <Test2 />,
      },
    ],
  },
]);
