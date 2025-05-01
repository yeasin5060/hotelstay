import React from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

const Main = () => {

  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <>
        {!isOwnerPath && <Navbar/> }
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Main