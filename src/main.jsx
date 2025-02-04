import All from "./Components/Pages/All";
import CategoryLayout from "./Components/Layouts/CategoryLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Home from "./Components/Pages/Home";
import Business from "./Components/Pages/Business";
import Personal from "./Components/Pages/Personal";
import Completed from "./Components/Pages/Completed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CategoryLayout />,
    errorElement: <h1>Bunday sahifa mavjud emas!</h1>,
    children: [
      {
        index: true,
        element: <All />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/personal",
        element: <Personal />,
      },
      {
        path: "/completed",
        element: <Completed />,
      },
    ],
  },
]);



createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
