import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import { Link, useNavigate } from 'react-router';
import AppCard from '../Components/AppCard';
import { CiSearch } from "react-icons/ci";
import Loading from '../Components/Loading';


const Apps = () => {

    const [search,setSearch]= useState('')
    
    const [searching, setSearching] = useState(false); 
    
    const {apps,loading} = useApps()
    const navigate = useNavigate(); 

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = 
    term ? apps.filter(app =>
        app.title.toLocaleLowerCase().includes(term)
      )
    : apps;


    useEffect(() => {
    if (term) {
      setSearching(true);
      const timer = setTimeout(() => {
        setSearching(false);
        if (searchedApps.length === 0) navigate('/notFound');
      }, 800); 
      return () => clearTimeout(timer);
    }
  }, [term, searchedApps, navigate]);
    

    return (
    
    <div className='bg-gray-200'>
        
        <div className="text-center space-y-4 ">
            <h1 className="text-5xl font-bold pt-15 ">Our All Applications</h1>
            <p className="text-gray-500">Explore All Apps on the Market developed by us. We code for Millions </p>
        </div>
        
        <div className='flex justify-between items-center pr-12 pt-5'>
            <span className='font-bold px-12 text-xl '> ({searchedApps.length}) Apps Found </span>

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

        {(loading ||searching) ? (
        <Loading count={16} />
      ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-6'>
                {searchedApps.map(app=>(
                    <AppCard key={app.id} app={app} />

                ))}
            </div>
            )}
                 
        </div>

    </div>
    );
};

export default Apps;