import React, { useState } from 'react'
import Heading from '../../utils/Headig'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
  const [dashboardData , setDashboardData] = useState(dashboardDummyData)
  return (
    <div>
      <Heading level='h2' text='Dashboard' className='text-[40px] text-[#252525] font-semibold font-playfair mb-[9px] capitalize'/>
      <Heading level='p' text='Monitor your room listing,track booking and analyze revenue-all in one place.Stay update your real-time insights to ensure smooth operation'className='w-[696px] text-left text-4 text-[#6B7280E5] font-normal'/>
      <div className='flex gap-4 my-8'>
        {/*-------Total Boking------- */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img className='max-sm:hidden h-10' src={assets.totalBookingIcon} alt="not found" />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <Heading level='p' text='total booking'className='text-blue-500 text-sm capitalize'/>
            <Heading level='p' text={dashboardData.totalBookings} className='text-neutral-400 text-base'/>
          </div>
        </div>
        {/*-------Total Revenue------- */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img className='max-sm:hidden h-10' src={assets.totalRevenueIcon} alt="not found" />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <Heading level='p' text='total revenue'className='text-blue-500 text-sm capitalize'/>
            <Heading level='p' text={dashboardData.totalRevenue} className='text-neutral-400 text-base'/>
          </div>
        </div>
      </div>
      {/*-------Recent Booking------- */}
      <Heading level='h2' text='recent booking' className='text-xl text-blue-950/70 font-medium mb-2.5 capitalize'/>
      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
              <tr className=''>
                <th className='py-3 px-4 font-medium text-gray-800 capitalize'>user name</th>
                <th className='py-3 px-4 font-medium text-gray-800 capitalize max-sm:hidden'>room name</th>
                <th className='py-3 px-4 font-medium text-gray-800 capitalize text-center'>total amount</th>
                <th className='py-3 px-4 font-medium text-gray-800 capitalize'>payment status</th>
              </tr>
          </thead>
          <tbody className='text-sm'>
            {dashboardData.bookings.map((item ,index)=>(
              <tr key={index}>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                    {item.user.username}
                  </td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                    {item.room.roomType}
                  </td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                    {item.totalPrice}
                  </td>
                  <td className='py-3 px-4 border-t border-gray-300 flex'>
                    <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                      {item.isPaid ? 'Completed' : 'pending'}
                    </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard