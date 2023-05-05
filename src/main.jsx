import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import JobDetails from './Components/JobDetails/JobDetails';
import Statistics from './Components/Statistics/Statistics';
import Error from './Components/Error/Error';
import Blog from './Components/Blog/Blog';


const router = createBrowserRouter([
  {
   path:'*',
   element:<Error></Error>
  },
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader:()=> fetch("/data.json")
      },
      {
        path:'/details/:detailsId',
        element:<JobDetails></JobDetails>,
        loader:()=> fetch("/data.json")
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
  
     
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

