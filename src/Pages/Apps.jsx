import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import { Link } from 'react-router';
import AppCard from '../Components/AppCard';
import { CiSearch } from "react-icons/ci";


const Apps = () => {

    const [search,setSearch]= useState('')
    const {apps} = useApps()

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = 
    term ? apps.filter(app =>
        app.title.toLocaleLowerCase().includes(term)
      )
    : apps


    return (
    
    <div className='bg-gray-200'>
        
        <div className="text-center space-y-4 ">
            <h1 className="text-5xl font-bold pt-15 ">Our All Applications</h1>
            <p className="text-gray-500">Explore All Apps on the Market developed by us. We code for Millions </p>
        </div>
        
        <div className='flex justify-between items-center pr-12 pt-5'>
            <span className='font-bold px-12 '> ({searchedApps.length}) Apps Found </span>

            {/* <label>
                <input type="text" />

            </label> */}

        <label className='input '>
            <CiSearch  className='size-7'/>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='search Apps'/>
        </label>

        </div>


            
        {/* apps */}
        <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-5 flex-1'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-6'>
                {searchedApps.map(app=>(
                    <AppCard key={app.id} app={app} />

                ))}
            </div>
                 
        </div>

    </div>
    );
};

export default Apps;