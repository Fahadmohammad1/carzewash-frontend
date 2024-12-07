import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
    </>
  );
};

export default DashboardLayout;
