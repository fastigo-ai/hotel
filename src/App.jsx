import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/ui/Home';
import AppLayout from './components/layout/AppLayout'
import Error from './components/ui/Error'
import CardDetails from './pages/cards/CardDetails';
import Confirm from './pages/payment/Confirm';
import OtplessLogin from './pages/Login/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    
    errorElement: <Error/>,
    children:
      [
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/carddetails/:id',
          element:<CardDetails/>,
        },
        {
          path:'/carddetails/:id/confirm',
          element:<CardDetails/>,
        },
        {
          path:'/confirm',
          element:<Confirm/>,
        },
        {
          path:'/login',
          element:<OtplessLogin/>,
        },
      ]
    
  }
])
const App = () => {
  return (
    <>
   

    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
