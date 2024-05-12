import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';


import App from './App.jsx';
import ErrorPage from './components/Navbar-Pages/Error.jsx';
import AboutMePage from './components/Navbar-Pages/AboutMe.jsx';
import PortfolioPage from './components/Navbar-Pages/Portfolio.jsx';
import ContactPage from './components/Navbar-Pages/Contact.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <AboutMePage />
      }, 
      {
        path: '/portfolio',
        element: <PortfolioPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      }
    ]
  }
]);

function AppRouter() {
  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
}

export default AppRouter;
