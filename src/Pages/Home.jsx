import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';

const Home = () => {

    const apps=useLoaderData()
    console.log(apps)
    return (
        <div className='bg-gray-200'>
            <Banner></Banner>
            
            {/* apps */}
            <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-6'>
                {apps.map(app=>(
                    <AppCard key={app.id} app={app} />

                ))}
            </div>
                 
            </div>


        </div>
    );
};

export default Home;