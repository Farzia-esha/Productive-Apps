import React from 'react';
import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import MainLayout from '../Layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true ,
            element: <Home />, 
        },
        {
            path: "/apps",
            element: <Apps />,
        },
    ]
  },
 

]);

export default router;