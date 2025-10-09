import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import downlaodImg from '../assets/icon-downloads.png';
import ratingImg from '../assets/icon-ratings.png';
import { loadApplist, removeFromInstall } from '../Utils/localStorage';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [showInstalled, setShowInstalled] = useState(() => loadApplist());
  const [sortOrder, setSortOrder] = useState("none");

  const sortedItem = (() => {
    if (sortOrder === 'size-asc') {
      return [...showInstalled].sort((p, q) => p.size - q.size);
    } else if (sortOrder === 'size-desc') {
      return [...showInstalled].sort((p, q) => q.size - p.size);
    } else {
      return showInstalled;
    }
  })();

  const handleUninstall = (id) => {
    const app = showInstalled.find(a => a.id === id);
    removeFromInstall(id);
    setShowInstalled(prev => prev.filter(a => a.id !== id));

    toast.info(`${app?.title || "App"} Uninstalled Successfully!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
      style: {
        marginTop: "60px",
      },
    });
  };

  return (
    <div className="bg-gray-100 p-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Your Installed Apps</h1>
        <p className="font-semibold text-gray-400">
          Explore All Apps on the Market developed by us
        </p>
      </div>

      <div className="flex items-center justify-between text-xl">
        <h1>({showInstalled.length}) Apps Found</h1>

        <label className='form-control max-w-xs'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort By Size <IoIosArrowDown /></option>
            <option value='size-asc'>Low-High</option>
            <option value='size-desc'>High-Low</option>
          </select>
        </label>
      </div>

      <div>
        {sortedItem.map(a => (
          <div key={a.id} className='card card-side bg-base-100 shadow border my-3 border-none'>
            <figure>
              <img className='w-40 object-cover' src={a.image} />
            </figure>
            <div className='card-body m-2'>
              <div className='flex justify-between'>
                <h3 className='card-title text-2xl font-semibold'>{a.title}</h3>
                <button
                  onClick={() => handleUninstall(a.id)}
                  className='btn border-none rounded-xl shadow-md bg-[#00D390] text-white mt-5'
                >
                  Uninstall
                </button>
              </div>

              <div className='flex gap-6 mt-4'>
                <div className='flex text-green-700 text-xl'>
                  <img className='w-6' src={downlaodImg} alt="" />
                  <p>{a.downloads}</p>
                </div>
                <div className='flex text-orange-600 text-xl'>
                  <img className='w-6' src={ratingImg} alt="" />
                  <p>{a.ratingAvg}</p>
                </div>
                <div className='flex text-green-700 text-xl'>
                  <p>{a.size} MB</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Installation;
