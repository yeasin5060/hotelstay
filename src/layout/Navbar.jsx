import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-2xl sticky">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="w-[158px] h-[36px] ">
            <img className="w-[100%] h-[100%] overflow-hidden " src='' alt="not found" />
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex space-x-6 items-center'>
            <Link to='/' className='text-gray-700 hover:text-blue-600 transition'>
              Home
            </Link>
            <Link to='hotel' className='text-gray-700 hover:text-blue-600 transition'>
              Hotel
            </Link>
            <Link to='exprience' className='text-gray-700 hover:text-blue-600 transition'>
              Expreience
            </Link>
            <Link to="about" className='text-gray-700 hover:text-blue-600 transition'>
              About
            </Link>
          </div>
         <div className='flex justify-end items-center gap-x-4'>
            <div className='text-black'>
                <input className='w-[200px] h-[30px] bg-[#c0b8b8] py-2 px-4 rounded-[10px] border-0 outline-0' type='search' placeholder='search' />
            </div>
            <div className='flex justify-center items-center'>
                <button className='text-white text-[18px] font-bold py-[10px] px-[30px] bg-black rounded-[10px] outline-0 border-0 cursor-pointer capitalize'>login</button>
            </div>
         </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar