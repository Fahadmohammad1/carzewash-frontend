import React from "react";
import { FaUsers } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import avatar from "../../assets/user-avatar.svg";
import arrow from "../../assets/arrow-icon.svg";
import { CiUser } from "react-icons/ci";
import UpdatePassModal from "./UpdatePassModal";
import logout from "../../assets/logout.svg";
import hand from "../../assets/dashboard/hand.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || location.pathname === `${path}/`;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="lg:h-[100px] lg:flex items-center justify-center border-b hidden">
          <h3 className="font-normal text-[32px] font-cw-regular flex gap-x-1">
            Hello, Mourad
            <img className="size-8 mt-[6px]" src={hand} alt="hand icon" />
          </h3>
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
          <div className="flex justify-between items-center">
            <p className="bg-cw-primary px-[14px] py-[10px] font-cw-regular flex items-center gap-x-2 text-white max-w-fit border rounded-lg my-10">
              <CiUser className="text-lg" /> Users Booking
            </p>
            <label className="flex items-center gap-[10px] rounded-[10px] border-[2px] py-3 px-[18px] w-full md:px-5 md:w-full lg:w-[260px]">
              <select className="border-0 w-full text-cw-secondary text-opacity-60 focus:outline-none bg-transparent">
                <option defaultChecked>15 User's Booking</option>
              </select>
            </label>
          </div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="text-white min-h-full w-[255px] p-0 bg-cw-secondary flex flex-col justify-between">
          <p className="text-[46px] leading-[54px] text-center pt-10 pb-9 font-cw-regular">
            Admin
          </p>
          <li>
            <Link
              to="/dashboard"
              className={`font-cw-regular w-full rounded-none flex items-center  px-6 py-[18px] pl-8 ${
                isActive("/dashboard")
                  ? "bg-cw-primary text-cw-secondary"
                  : "bg-cw-secondary text-white"
              }`}
            >
              <GoChecklist className="text-[18px] mr-[22px]" /> Booking List
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/contact"
              className={`font-cw-regular w-full rounded-none flex items-center bg-cw-primary px-6 py-[18px] pl-8 ${
                isActive("/dashboard/contact")
                  ? "bg-cw-primary text-cw-secondary"
                  : "bg-cw-secondary text-white"
              }`}
            >
              <FaUsers className="text-[18px] mr-[22px]" /> Contact List
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-cw-regular w-full rounded-none flex items-center px-6 py-[18px] pl-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-[18px] mr-[22px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </Link>
          </li>

          <div className="mt-auto mb-24 mx-auto lg:flex flex-col px-[30px]">
            <button
              onClick={() => {
                localStorage.removeItem("admin");
                navigate("/");
              }}
              className="px-[54px] py-[18px] bg-[#6AB4D44D] rounded-[12px] flex items-center gap-x-3"
            >
              <img src={logout} alt="logout icon" />
              Logout
            </button>
            <button
              onClick={() => document.getElementById("update_pass").showModal()}
              className="text-white mt-2 mx-auto w-full hover:underline"
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
