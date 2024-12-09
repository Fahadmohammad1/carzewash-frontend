import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <section className="navbar mb-[40px] mt-6 px-5 md:px-10 lg:px-[104px] lg:mb-[80px]">
      <div className="flex-1 lg:flex-none">
        <img src={logo} className="w-[67px] lg:w-[110px]" alt="logo" />
      </div>
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block size-[32px] stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/pricing">Tarification</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex mx-auto">
        <ul className="menu menu-horizontal px-1 flex gap-x-10">
          <li className="text-cw-primary font-medium text-[20px] leading-[23px] hover:bg-cw-secondary rounded-lg hover:text-white">
            <Link to="/">Accueil</Link>
          </li>
          <li className="font-medium text-[20px] leading-[23px] text-cw-secondary text-opacity-40 hover:bg-cw-secondary rounded-lg hover:text-white">
            <Link to="/pricing">Tarification</Link>
          </li>
          <li className="font-medium text-[20px] leading-[23px] text-cw-secondary text-opacity-40 hover:bg-cw-secondary rounded-lg hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex w-fit">
        <button className="px-[51px] py-[17px] bg-cw-primary rounded-lg text-white text-[20px] font-medium hover:bg-cw-secondary">
          Réservation
        </button>
      </div>
    </section>
  );
};

export default Navbar;
