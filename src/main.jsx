import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

//importing pages
import App from './App.jsx'
import ErrorPage from './components/Navbar-Pages/Error.jsx';
import AboutMePage from './components/Navbar-Pages/AboutMe.jsx';
import PortfolioPage from './components/Navbar-Pages/Portfolio.jsx';
import ContactPage from './components/Navbar-Pages/Contact.jsx';

//Create Path
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
        path: 'portfolio',
        element: <PortfolioPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)