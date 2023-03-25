import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/Header'
import Body from './components/body/Body'
import TalentGrid from './components/talentGrid/TalentGrid'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  TalentPage  from './components/talentPage/TalentPage'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/talents",
        element: <TalentGrid />
      },
      {
        path: "/talent/:id",
        element: <TalentPage />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
