import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const sidebarLinks = [
    {name : 'Dashboard' , path : '/owner' , icons : assets.dashboardIcon},
    {name : 'Add Room' , path : '/owner/add-room' , icons : assets.addIcon},
    {name : 'List Room' , path : '/owner/list-room' , icons : assets.listIcon},
  ]
  return (
   <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
    {
      sidebarLinks.map((item , index) => (
       <NavLink to={item.path} key={index} end = '/owner' className={({isActive})=> `flex items-center py-3 px-4 md:px-8 gap-3 ${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600 " : "hover:bg-gary-100/90 border-white text-gray-700"}`}>
          <img className='min-w-6 min-h-6' src={item.icons} alt={item.name}/>
          <p className='mg:block  text-center'>{item.name}</p>
        </NavLink>
      ))
    }
    </div>
  )
}

export default Sidebar