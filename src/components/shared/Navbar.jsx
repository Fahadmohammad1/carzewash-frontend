import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || location.pathname === `${path}/`;

  return (
    <section className="navbar mb-[40px] mt-6 px-5 md:px-10 lg:px-[104px] lg:mb-[80px]">
      <div onClick={() => navigate("/")} className="flex-1 lg:flex-none">
        <img src={logo} className="w-[67px] lg:w-[110px]" alt="logo" />
      </div>
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" onClick={toggleDropdown} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block size-[32px] stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow"
            >
              <li className="mb-2">
                <Link to="/">Accueil</Link>
              </li>
              <li className="mb-2">
                <Link to="/pricing">Tarification</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center hidden lg:flex mx-auto">
        <ul className="menu menu-horizontal px-1 flex gap-x-10">
          <li>
            <Link
              to="/"
              className={`font-medium text-[20px] leading-[23px] hover:bg-cw-secondary rounded-lg hover:text-white ${
                isActive("/") ? "bg-cw-primary" : "bg-transparent"
              }`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className={`font-medium text-[20px] leading-[23px] text-cw-secondary text-opacity-40 hover:bg-cw-secondary rounded-lg hover:text-white ${
                isActive("/pricing") ? "bg-cw-primary" : "bg-transparent"
              }`}
            >
              Tarification
            </Link>
          </li>
          <li>
            <Link
              className={`font-medium text-[20px] leading-[23px] text-cw-secondary text-opacity-40 hover:bg-cw-secondary rounded-lg hover:text-white ${
                isActive("/pricing") ? "bg-cw-primary" : "bg-transparent"
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex w-fit">
        <button
          onClick={() => navigate("/booking")}
          className="px-[51px] py-[17px] bg-cw-primary rounded-lg text-white text-[20px] font-medium hover:bg-cw-secondary transform hover:scale-110 transition duration-150 ease-in-out"
        >
          Réservation
        </button>
      </div>
    </section>
  );
};

export default Navbar;
