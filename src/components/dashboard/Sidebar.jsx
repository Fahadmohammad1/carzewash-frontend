import React from "react";
import { Outlet } from "react-router";

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="lg:h-[100px] flex items-center justify-center border-b">
          <h3 className="font-normal text-[32px]">Hello, Mourad</h3>
        </div>
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu text-white min-h-full w-[255px] p-0 bg-cw-secondary">
          <p className="text-[46px] leading-[54px] text-center pt-10 pb-9">
            Admin
          </p>
          <li>
            <a className="mx-auto">Sidebar Item 1</a>
          </li>
          <li>
            <a className="text-center">Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
