import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingScreen from './components/LandingScreen';
import LoginScreen from './components/LoginScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingScreen></LandingScreen>
  },
  {
    path: '/loginScreen',
    element: <LoginScreen></LoginScreen>
  },
  {
    path: '/' 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
