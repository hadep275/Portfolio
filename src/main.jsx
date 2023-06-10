import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './routes/about'
import Contact from './routes/contact.jsx';
import ErrorPage from './routes/error-page.jsx';
import Skills from './routes/skills'
import Project from './routes/project'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          
        ]
      },
      {
      path: "/project",
      element: <Project />,
      },
      {
      path: "/skills",
      element: <Skills />,
      },

    ],
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
