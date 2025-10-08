import React from 'react';
import download from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const{ image,title,downloads,ratingAvg,id} = app
    console.log(app)

    return (
    <Link to={`/AppDetails/${id}`} state={app} >
      <div className="bg-white h-full shadow-md rounded-xl flex flex-col justify-between hover:scale-105 transition duration-300 ">
        <figure className="md:h-48 overflow-hidden  mx-auto p-5">
          <img src={image} alt="App Icon" className="rounded-xl mx-auto" />
        </figure>
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex justify-between">
            <p className="btn text-[#00D390] border-none rounded-2xl">
              <img src={download} width={"14px"} alt="" /> {downloads}
            </p>
            <p className="btn text-[#FF8811] bg-[#FFF0E1] border-none rounded-2xl">
              <img src={ratingImg} width={"14px"} alt="" /> {ratingAvg}
            </p>
          </div>
        </div>
      </div>
    </Link>


    );
};

export default AppCard;