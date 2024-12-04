import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Booking from "../pages/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
    ],
  },
]);
