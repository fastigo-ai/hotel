import React from 'react'
import Navbar from '../ui/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/Footer'
import ScrollToTop from '../ui/ScrollToTop'

const AppLayout = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
