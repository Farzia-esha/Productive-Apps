// 

import React from 'react';
import logo from "../assets/logo.png";
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <p className="font-bold text-xl">HERO.IO</p>
        </div>

          <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
  </nav>


        {/*Social Icons */}
        <div className=" gap-4 mt-4 md:mt-0 ">
            <div>
                <p className='text-2xl'>Social Links</p>

            </div>
            <div className='flex mt-4 gap-4'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer rounded-xl bg-white text-purple-900" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-blue-700 cursor-pointer rounded-xl  " />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
          </a>

            </div>


        </div>

      </div>

      {/*copyright */}
      <div className="text-center mt-4 text-xs">
        <hr className='text-gray-400' />
        Copyright © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
