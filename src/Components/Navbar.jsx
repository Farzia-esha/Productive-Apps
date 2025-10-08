import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom"; 
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <div className="flex flex-col md:flex-row md:gap-10 font-semibold">
      <NavLink to="/" className="md:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text md:text-transparent text-xl flex items-center gap-2 md:underline md:decoration-[#894FEC]">
       Home
      </NavLink>
      <NavLink to="/apps" className=" text-lg flex items-center gap-2">
       Apps
      </NavLink>
      <NavLink to="/installation" className=" text-lg flex items-center gap-2">
       Installation
      </NavLink>
    </div>

  );
  

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">

        <div className="navbar bg-base-100 font-inter">
          {/* left */}
          <div className="navbar-start">
            {/* mobile dropdown */}
            <div className="dropdown pr-4">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[100]"
              >
                {navLinks}
              </ul>
            </div>

            {/* Logo */}
            {/* bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent */}
            <Link
              to="/"
              className="flex items-center justify-center font-bold gap-2 text-3xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
            >
              <img src={logo} alt="" className=" w-10 " />
              HERO.IO 
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>

          <div className="navbar-end">
            <Link
              to="https://github.com/Farzia-esha"
              target="_blank"
              className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-xl border-none"
            >
              <FaGithub className=" size-5 rounded-2xl " /> Contribute
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
