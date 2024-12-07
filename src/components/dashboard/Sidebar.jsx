import React from "react";
import { FaUsers } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { Outlet } from "react-router";
import avatar from "../../assets/user-avatar.svg";
import arrow from "../../assets/arrow-icon.svg";
import { CiUser } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="lg:h-[100px] flex items-center justify-center border-b">
          <h3 className="font-normal text-[32px]">Hello, Mourad</h3>
        </div>
        <div className="px-[60px] pt-[60px] bg-[#F5F5F9]">
          <div className="flex gap-x-[60px]">
            <div className="flex items-center">
              <img
                className="rounded-full w-[100px]"
                src={avatar}
                alt="user avatar"
              />
            </div>
            <div className="flex items-center bg-white w-full">
              <img className="px-6 py-[21px]" src={arrow} alt="icon" />
              <div className="font-cw-regular">
                <p className="text-base">Total Booking</p>
                <p className="text-[19px]">2000</p>
              </div>
            </div>
          </div>
          <p className="bg-cw-primary px-[14px] py-[10px] font-cw-regular flex items-center gap-x-2 text-white max-w-fit border rounded-lg my-10">
            <CiUser className="text-lg" /> 15 Users Booking
          </p>
          <Outlet />
        </div>
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
          <p className="text-[46px] leading-[54px] text-center pt-10 pb-9 font-cw-regular">
            Admin
          </p>
          <li className="text-black bg-cw-primary">
            <a className="mx-auto font-cw-regular">
              <GoChecklist /> Booking List
            </a>
          </li>
          <li>
            <a className="mx-auto font-cw-regular">
              <FaUsers /> Contact List
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
