import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Components/Loading';

const MainLayout = () => {
    const navigation=useNavigation();

    const [showLoader, setShowLoader] = useState(false);

      useEffect(() => {
    if (navigation.state === 'loading') {
      setShowLoader(true);

      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 800);

       return () => clearTimeout(timer);
       } else {
      const timer = setTimeout(() => setShowLoader(false), 600);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);



    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='max-w-screen-xl mx-auto w-full flex-1'>
               {showLoader? <Loading />: <Outlet /> }
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;