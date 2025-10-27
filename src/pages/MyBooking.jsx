import React, { useEffect } from 'react'
import Heading from '../utils/Headig'

import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const MyBooking = () => {
  const {axios , getToken , user} = useAppContext();
  const[bookings , setBookings] = useState([]);

  const fetchUserBooking = async ()=> {
    try {
      const {data} = await axios.get('/api/bookings/user', {headers : {Authorization : `Bearer ${await getToken()}`}});
       if(data.success){
          setBookings(data.bookings)
        }else{
          toast.error(data.message);
        };
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(()=> {
    if(user){
      fetchUserBooking();
    }
  },[user]);
  return (
    <div className='bg-white'>
        <div className='container'>
            <div className='text-left py-28 md:pb-32 px-4 md:px-16 lg:px-24 xl:px-32'>
                <Heading level='h2' text='my booking' className='text-[40px] text-[#252525] font-semibold mb-[10px] capitalize'/>
                <Heading level='p' text='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks'className='w-[579px] text-4 text-[#6B7280E5] font-semibold '/>
                <div className='max-w-6xl mt-8 w-full text-gray-800'>
                  <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div className='w-1/3 capitalize'>Hotels</div>
                    <div className='w-1/3 capitalize'>Date & Timings</div>
                    <div className='w-1/3 capitalize'>Payment</div>
                  </div>
                  {
                    bookings.map((booking) => (
                      <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t ' key={booking._id}>
                        {/*---------  Hotels Details---------  */}
                        <div className='flex flex-col md:flex-row'>
                          <img className='min-md:w-44 rounded shadow object-cover' src={booking.room.images[0]} alt="not found" />
                          <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                            <p className='text-2xl font-playfair'>
                              {booking.hotel.name}
                              <span className='font-inter text-sm'> ({booking.room.roomType})</span>
                            </p>
                            <div className='flex items-center text-sm gap-1 text-gray-500'>
                              <img src={assets.locationIcon} alt="not found" />
                              <span>{booking.hotel.address}</span>
                            </div>
                            <div className='flex items-center text-sm gap-1 text-gray-500'>
                              <img src={assets.guestsIcon} alt="not found" />
                              <span>{`Guests : ${booking.guests}`}</span>
                            </div>
                            <p className='text-base'>Total :{booking.totalPrice} </p>
                          </div>
                        </div>
                        {/*---------- Date & Timings----------  */}
                        <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                          <div>
                            <p className='capitalize'>Check-In:</p>
                            <p className='text-gray-500 text-sm'>{new Date(booking.checkInDate).toDateString()}</p>
                          </div>
                          <div>
                            <p className='capitalize'>Check-Out:</p>
                            <p className='text-gray-500 text-sm'>{new Date(booking.checkOutDate).toDateString()}</p>
                          </div>
                        </div>
                        {/*---------- Payment Status-----------  */}
                        <div className='flex flex-col items-start justify-center pt-3'>
                          <div className='flex items-center gap-2'>
                            <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500 ': 'bg-red-500'}`}>
                            </div>
                            <p className={`text-sm ${booking.isPaid ? 'text-green-500 ': 'text-red-500'}`}>{booking.isPaid ? "Paid" : "Unpaid"}</p>
                          </div>
                          {!booking.isPaid && (
                              <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer capitalize'>pay now</button>
                            )}
                        </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyBooking