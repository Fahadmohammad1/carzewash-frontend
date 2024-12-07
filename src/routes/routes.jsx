import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import DashboardLayout from "../components/layout/DashboardLayout";
import BookingList from "../pages/dashboard/BookingList";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <BookingList />,
      },
    ],
  },
]);
