import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import DashboardLayout from "../components/layout/DashboardLayout";
import BookingList from "../pages/dashboard/BookingList";
import ContactList from "../pages/dashboard/ContactList";
import Login from "../pages/Login";
import RequireAuth from "../components/dashboard/RequireAuth";

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
    path: "/login",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: <BookingList />,
      },
      {
        path: "/dashboard/contact",
        element: <ContactList />,
      },
    ],
  },
]);
