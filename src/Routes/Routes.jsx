import React from 'react';
import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Installation from '../Pages/Installation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    // hydrateFallbackElement:,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
        {
            index: true ,
            element: <Home />, 
            loader:()=>fetch('/data.json')
        },
        {
            path: "/apps",
            element: <Apps />,
        },
        {
            path:'/installation',
            element: <Installation />

        },
    ]
  },
 

]);

export default router;