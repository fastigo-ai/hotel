import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/ui/Home';
import AppLayout from './components/layout/AppLayout'
import Error from './components/ui/Error'
import CardDetails from './pages/cards/CardDetails';
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
