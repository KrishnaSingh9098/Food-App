import { useState } from 'react'

import './App.css'

import Login from './auth/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './MainLayout';
import Signup from './auth/Signup';
import ResetPassword from './auth/ResetPassword';
import ForgotPassword from './auth/ForgetPassword';
import VerifyEmail from './auth/VerifyEmail';
import Navbar from './Components/Navbar';

const appRouter = createBrowserRouter([
  {
    path:"/",
  element:<Navbar/>,
  // children:[
  //   {
  //     path:"/login"
  //   }
  // ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/SignuP",
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
