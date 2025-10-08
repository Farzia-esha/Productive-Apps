// import React from 'react';
// import { useRouteError } from 'react-router';

// const ErrorPage = () => {
//     const error =useRouteError();
//     return (
//         <div>{error.message}</div>
//     );
// };

// export default ErrorPage;

import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
        <Navbar />
        <div>
            {error.message}
        </div>
        <Footer />
    </>
  );
};

export default ErrorPage;
