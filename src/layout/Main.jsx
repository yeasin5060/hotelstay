import React from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import HotelReg from '../component/HotelReg'
import { Toaster } from 'react-hot-toast'

const Main = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  
  return (
    <>
      <Toaster/>
      {!isOwnerPath && <Navbar/> }
      {false && <HotelReg/>}
          <Outlet/>
      <Footer/>
    </>
  )
}

export default Main