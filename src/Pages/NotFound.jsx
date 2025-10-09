import React from 'react';
import AppError from '../assets/App-Error.png'
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa";
const NotFound = () => {

    return (
         <>
         <div className="flex flex-col justify-center items-center text-center min-h-[80vh]">
                <img
                  src={AppError}
                  alt="404 Error"
                  className="w-[300px] mb-6"
                />
                <h1 className="font-bold text-3xl mb-2">Oops!!! App not found!</h1>
                <p className="text-gray-500 txt-sm">The App you are requesting is not found on our system.please try another apps.</p>
                <Link to='/apps'><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white flex items-center gap-1 rounded-md p-2 font-bold mt-5'>Go Back <FaArrowRight /></button></Link>
              </div>
                
         </>

    );
};

export default NotFound;