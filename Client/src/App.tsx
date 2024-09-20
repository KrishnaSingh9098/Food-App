import { useState } from 'react'

import './App.css'

import Login from './auth/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './auth/Signup';
import ResetPassword from './auth/ResetPassword';
import ForgotPassword from './auth/ForgetPassword';
import VerifyEmail from './auth/VerifyEmail';
import HeroSection from './Components/HeroSection';
import MainLayout from './layout/MainLayout';
import Profile from './Components/Profile';
import SearchPage from './Components/SearchPage';
import RestraurantDetail from './Components/RestaurantDetail';
import Cart from './Components/Cart';
import Restaurant from './admin/Restaurant';

const appRouter = createBrowserRouter([
  {
    path:"/",
  element:<MainLayout/>,
  children:[
    {
      path:"/",
      element:<HeroSection/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path: "/search/:text",
      element: <SearchPage/>,
    },
    {
      path: "/restraurant/:id",
      element: <RestraurantDetail/>
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    // {
    //   path: "/order/status",
    //   element: <Success />,
    // },
    // admin services start from here
    {
      path: "/admin/restaurant",
      element:<Restaurant />,
    },
    // {
    //   path: "/admin/menu",
    //   element:<AdminRoute><AddMenu /></AdminRoute>,
    // },
    // {
    //   path: "/admin/orders",
    //   element:<AdminRoute><Orders /></AdminRoute>,
    // },
  ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/Signup",
    element:<Signup/>
  },
  {
    path:"/forgot-password",
    element:<ForgotPassword/>
  },
  {
    path:"/reset-Password",
    element:<ResetPassword/>
  },
  {
    path:"/verify-email",
    element:<VerifyEmail/>
  }
])

function App() {
 

  return (
    <main>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </main>
  )
}

export default App
