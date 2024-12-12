import React from "react";
import { FaUsers } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { Link, Outlet, useNavigate } from "react-router";
import avatar from "../../assets/user-avatar.svg";
import arrow from "../../assets/arrow-icon.svg";
import { CiUser } from "react-icons/ci";
import UpdatePassModal from "./UpdatePassModal";
import logout from "../../assets/logout.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="lg:h-[100px] lg:flex items-center justify-center border-b hidden">
          <h3 className="font-normal text-[32px]">Hello, Mourad</h3>
        </div>
        <div className="lg:hidden">
          <div className="flex px-5 justify-between pt-[60px] pb-10">
            <div>
              <h3 className="text-[32px] leading-[38px] font-cw-regular">
                Hello,
                <br />
                Mourad
              </h3>
            </div>
            <div
              onClick={() => {
                localStorage.removeItem("admin");
                navigate("/");
              }}
              className="bg-cw-secondary p-5 ml-auto h-fit my-auto rounded-md cursor-pointer"
            >
              <img src={logout} alt="logout icon" />
            </div>
          </div>
          <div className="py-10 bg-cw-secondary">
            <p className="text-[46px] text-white leading-[54px] font-cw-regular text-center mb-48px">
              Admin
            </p>
            <div className="flex gap-x-6 justify-center mt-12">
              <span className="p-4 rounded-lg bg-cw-primary">
                <Link to="/dashboard">
                  <GoChecklist className="text-white text-[18px]" />
                </Link>
              </span>
              <span className="p-4 rounded-lg bg-cw-primary">
                <Link to="/dashboard/contact">
                  <FaUsers className="text-white text-[18px]" />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:px-[60px] lg:pt-[60px] px-5 lg:bg-[#F5F5F9]">
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
            <CiUser className="text-lg" /> Users Booking
          </p>
          <Outlet />
        </div>
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
          <li>
            <Link
              to="/dashboard"
              className="font-cw-regular w-full rounded-none flex justify-center bg-cw-primary"
            >
              <GoChecklist /> Booking List
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/contact"
              className="font-cw-regular w-full rounded-none flex justify-center"
            >
              <FaUsers /> Contact List
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-cw-regular w-full rounded-none flex justify-center"
            >
              <FaUsers /> Home
            </Link>
          </li>

          <div className="mt-auto mb-24 mx-auto lg:flex flex-col">
            <button
              onClick={() => {
                localStorage.removeItem("admin");
                navigate("/");
              }}
              className="px-[54px] py-[18px] bg-[#6AB4D44D] rounded-[12px]"
            >
              Logout
            </button>
            <button
              onClick={() => document.getElementById("update_pass").showModal()}
              className="text-white mt-2 mx-auto w-full"
            >
              Update Password
            </button>
            <UpdatePassModal />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
