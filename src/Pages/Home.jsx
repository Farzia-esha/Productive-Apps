import React from 'react';
import Banner from '../Components/Banner';
import { Link } from 'react-router';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import Loading from '../Components/Loading';

const Home = () => {

    // const apps=useLoaderData()

    const {apps,loading}=useApps();
    // console.log(data)
    const featuredApps =apps.slice(0,8)

    // console.log(apps)
    return (
        <div className='bg-gray-200'>
            <Banner></Banner>
            
            {/* apps */}
            <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>

                <div className="text-center space-y-4 mb-5">
                    <h1 className="text-5xl font-bold">Trending Apps</h1>
                    <p className="text-gray-500">Explore All Trending Apps on the Market developed by us </p>
                </div>

                {loading ? (
            <Loading />
                ) : (

                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-6'>
                {featuredApps.map(app=>(
                    <AppCard key={app.id} app={app} />

                ))}
            </div>
                )} 


            <div className=" mt-10 text-center">
          <Link
            to={"/apps"}
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-xl border-none "
          >
            Show All
          </Link>
        </div>
                 
            </div>


        </div>
    );
};

export default Home;