import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="px-5">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
