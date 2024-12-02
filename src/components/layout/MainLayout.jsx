import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div className="px-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
