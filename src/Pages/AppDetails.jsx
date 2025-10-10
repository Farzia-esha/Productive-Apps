import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import downloadImg from '../assets/icon-downloads.png';
import ratingImg from '../assets/icon-ratings.png';
import reviewImg from '../assets/icon-review.png';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { updateList, loadApplist } from '../Utils/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Components/Loading';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [installed, setInstalled] = useState(false);
  const [showLoading, setShowLoading] = useState(true); 
  
  
  const app = apps.find(a => a.id === Number(id));

    useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000); // 
    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    const installedApps = loadApplist();
    if (installedApps.some(a => a.id === Number(id))) {
      setInstalled(true);
    }
  }, [id]);

  if (loading || showLoading) return <Loading />; //
  if (!app) return <p>App not found!</p>;

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app || {};

  const handleInstall = () => {
    updateList(app);
    setInstalled(true);

    // toast
    toast.success(`${title} Installed Successfully!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
      style: {
        marginTop:'60px',
      }
    });
  };

  return (
    <div className="bg-gray-200 p-12">
      <div className="pt-10">
        <div className="flex flex-col md:flex-row gap-10">
          <figure className="bg-white h-fit w-fit rounded-2xl p-4 shadow-xl flex-1/3">
            <img src={image} className="mx-auto" alt={title} />
          </figure>

          <div className="w-full">
            <div>
              <h1 className="font-bold text-4xl">{title}</h1>
              <p className="text-[#627382] font-bold">
                Developed by{" "}
                <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  {companyName}
                </span>
              </p>
            </div>

            <div className="divider"></div>

            <div className="flex items-center gap-10">
              <div>
                <img src={downloadImg} alt="" />
                <p>Downloads</p>
                <h1 className="text-3xl font-bold">{downloads}</h1>
              </div>
              <div>
                <img src={ratingImg} alt="" />
                <p>Average Ratings</p>
                <h1 className="text-3xl font-bold">{ratingAvg}</h1>
              </div>
              <div>
                <img src={reviewImg} alt="" />
                <p>Total Reviews</p>
                <h1 className="text-3xl font-bold">{reviews}</h1>
              </div>
            </div>

            {/* Install */}
            <div className="py-10">
              <button
                onClick={handleInstall}
                disabled={installed}
                className={`btn btn-xl border-none rounded-xl px-5 shadow-md ${
                  installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] text-white'
                }`}
              >
                {installed ? 'Installed' : `Install Now (${size}MB)`}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* Chart */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Ratings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[...ratings].reverse()}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" barSize={30}></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="divider"></div>

      {/* Description */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Description</h1>
        <p className="font-semibold text-[#627382]">{description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
