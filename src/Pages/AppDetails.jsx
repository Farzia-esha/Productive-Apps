import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import downloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import reviewImg from '../assets/icon-review.png'

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { updateList } from '../Utils/localStorage';

const AppDetails = () => {
    const {id} =useParams();
    const {apps,loading }= useApps()

    const app=apps.find(a=>a.id===Number(id))

    if(loading) return <p>Loading...</p>
    const {image,title,companyName,description,size,reviews,ratingAvg,downloads,ratings}= app || {}

    // const handleAddToInstall =()=>{
    //   const existingList=JSON.parse(localStorage.getItem('install'))

    //   // console.log(JSON.parse(existingList))

    //   let updatedList=[]
    //   if(existingList){
    //     const isDuplicate =existingList.some(a=>a.id===app.id)
    //     if(isDuplicate) return alert('Installed')
    //     updatedList=[...existingList,app]
    //   }
    //   else{
    //     updatedList.push(app)
    //   }

    //   localStorage.setItem('install',JSON.stringify(updatedList))

    // }

    return (

 <div className=" bg-gray-200 p-12">
    <div className="pt-10">
        <div className="flex flex-col md:flex-row  gap-10">
            <figure className="bg-white h-fit w-fit rounded-2xl p-4 shadow-xl flex-1/3">
            <img src={image} className="mx-auto" alt="" />
            </figure>
            
            <div className="w-full">
              <div>
                <h1 className="font-bold text-4xl">{title}</h1>
                <p className="text-[#627382] font-bold ">
                  Developed by {" "}
                  <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{companyName}</span>
                </p>
              </div>
              <div className="flex w-full flex-col ">
                <div className="divider "></div>
              </div>
              <div className="flex items-center gap-10">
                <div>
                  <div className="space-y-2">
                    <img src={downloadImg} alt="" />
                    <p>Downloads</p>
                    <h1 className="text-3xl font-bold">{downloads}</h1>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <img src={ratingImg} alt="" />
                    <p>Average Ratings</p>
                    <h1 className="text-3xl font-bold">{ratingAvg}</h1>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <img src={reviewImg} alt="" />
                    <p>Total Reviews</p>
                    <h1 className="text-3xl font-bold">{reviews}</h1>
                  </div>
                </div>
              </div>

              {/* button */}
              <div className='py-10'> 
                <button onClick={()=>updateList(app)} 
                className='btn btn-xl border-none  rounded-xl px-5 shadow-md bg-[#00D390] text-white'>Install Now ({size}MB)</button>
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <div className="divider"></div>
        </div>

        {/* chart */}
        <div className="mt-12 ">
        <h2 className="text-2xl font-bold mb-4">Ratings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[...ratings].reverse()}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8C00" barSize={30}>
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

        <div className="flex w-full flex-col py-10">
          <div className="divider text-blue"></div>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold ">Description</h1>
          <p className="font-semibold text-[#627382]">{description}</p>
        </div>
    </div>


    );
};

export default AppDetails;