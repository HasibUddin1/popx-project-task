import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingScreen from './components/LandingScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import Profile from './components/Profile';
import AuthProviders from './providers/AuthProviders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingScreen></LandingScreen>
  },
  {
    path: 'loginScreen',
    element: <LoginScreen></LoginScreen>
  },
  {
    path: 'signUpScreen',
    element: <SignUpScreen></SignUpScreen>
  },
  {
    path: 'profile',
    element: <Profile></Profile>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
