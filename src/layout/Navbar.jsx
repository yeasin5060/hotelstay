import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { assets } from '../assets/assets';
const Navbar = () => {

  const [isScrolled , setIsScrolled] = useState(false)
  const [isOpenMenu , setIsOpenMenu] = useState(false)

  useEffect (() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }
      window.addEventListener('scroll' , handleScroll);
      return () => window.removeEventListener('scroll' , handleScroll)
  },[])
  
  return (
    <nav className={`fixed top-0 left-0 w-full  px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? 'bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4' : 'py-4 md:py-6'} `}>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <Link to = '/' >
            <div className='w-[158px] h-[36px] '>
              <img className='w-[100%] h-[100%] overflow-hidden ' src={assets.logo} alt="not found" />
            </div>
          </Link>
          {/* Navigation Links */}
          <div className='hidden md:flex space-x-6 items-center'>
            <Link to='/' className='text-white text-[16px] font-semibold'>
              Home
            </Link>
            <Link to='hotel' className='text-white text-[16px] font-semibold'>
              Hotel
            </Link>
            <Link to='exprience' className='text-white text-[16px] font-semibold'>
              Expreience
            </Link>
            <Link to="about" className='text-white text-[16px] font-semibold'>
              About
            </Link>
            <div className='flex justify-center items-center'>
              <button className='text-white text-[16px] font-semibold py-[6px] px-[20px] rounded-[15px] outline-0 border-[1px] border-rose-50 cursor-pointer capitalize transition-all'>dashboard</button>
            </div>
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
      {/* mobail menu button */}
      <div className = 'flex items-center gap-3 md:hidden'>
        <img onClick={()=> setIsOpenMenu(!isOpenMenu)} className={`${isScrolled && 'invert'} h-4 cursor-pointer`} src={assets.menuIcon} alt="menu hidden" />
      </div>
      {/* mobail menu */}
      <div className= {`fiexd top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isOpenMenu ?"transition-x-0" : "-transition-x-full"}`}>

        <button className='absolute top-4 right-4 cursor-pointer' onClick={() => setIsOpenMenu(false)}>
            <img className='h-6.5' src={assets.closeIcon} alt="close menu" />
        </button>
          <Link to='/' className='text-gray-700 hover:text-blue-600 transition'>
            Home
          </Link>
          <Link to='rooms' className='text-gray-700 hover:text-blue-600 transition'>
            Hotel
          </Link>
          <Link to='exprience' className='text-gray-700 hover:text-blue-600 transition'>
            Expreience
          </Link>
          <Link to="about" className='text-gray-700 hover:text-blue-600 transition'>
            About
          </Link>
          <div className='flex justify-center items-center'>
            <button className='text-black text-[16px] font-semibold py-[6px] px-[20px] rounded-[15px] outline-0 border-[1px] border-rose-50 cursor-pointer capitalize transition-all'>dashboard</button>
          </div>
          <div className='flex justify-center items-center'>
            <button className='text-white text-[18px] font-bold py-[10px] px-[30px] bg-black rounded-[10px] outline-0 border-0 cursor-pointer capitalize'>login</button>
          </div>
      </div>
    </nav>
  )
}

export default Navbar