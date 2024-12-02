import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="px-5">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
