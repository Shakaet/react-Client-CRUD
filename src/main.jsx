import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout.jsx';
import AddU from './AddU.jsx';
import User from './User.jsx';
import Update from './Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<AddU></AddU>
      },
      {
        path:"/user",
        element:<User></User>,
        loader:(()=>fetch("http://localhost:5000/user"))
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        loader:(({params})=>fetch(`http://localhost:5000/user/${params.id}`))
        

      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
