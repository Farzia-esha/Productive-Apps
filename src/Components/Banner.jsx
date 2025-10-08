import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
import playStoreImg from '../assets/playStore.png'
import appStoreImg from '../assets/AppStore.png'

const Banner = () => {
  return (
    <div className="py-15">
        {/* Banner */}
      <div className="text-center">
        <h1 className="font-bold text-4xl md:text-6xl ">WE Build 
            <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold">Productive </span>
          Apps
        </h1>
        <p className="max-w-3xl mx-auto py-6">
         At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        {/* app store */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <Link
            to="https://play.google.com/store/games?hl=en"
            target="_blank"
            className="btn btn-xl  font-bold rounded-10 hover:scale-105 hover:bg-blue-800 hover:text-white transition duration-500 flex items-center gap-2">
            <img src={playStoreImg} alt="" className="w-6 h-6" />
            Google Play
          </Link>

          <Link
            to="https://www.apple.com/app-store/"
            target="_blank"
            className="btn btn-xl  font-bold rounded-10 hover:scale-105 hover:bg-blue-800 hover:text-white transition duration-500 flex items-center gap-2">
            <img src={appStoreImg} alt="" className="w-6 h-6" />
            App Store
          </Link>
        </div>
        <div className="pt-10">
          <img src={heroImg} className="mx-auto" alt="Hero" />
        </div>

      </div>
    </div>
  );
};

export default Banner;