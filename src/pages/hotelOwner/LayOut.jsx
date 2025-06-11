import React from 'react'
import Navbar from '../../component/hotelOwner/Navbar'
import Sidebar from '../../component/hotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <div className='bg-white'>
        <div className='container'>
            <div className='flex flex-col h-screen'>
                <Navbar/>
                <div className='flex h-full'>
                  <Sidebar/>
                  <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
                    <Outlet/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LayOut