import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './components/about'
import Contact from './components/contact.jsx';
import ErrorPage from './components/error-page.jsx';
import Skills from './components/skills'
import Project from './components/project'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
// import Navbar from './components/navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
    ],
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
