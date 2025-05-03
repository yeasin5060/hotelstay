import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import Heading from '../utils/Headig'

const HotelCard = ({room , index}) => {
  return (
    <Link to={'/room/' + room._id} onClick={() => scrollTo(0,0)} key= {room._id} className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0_4px_4px_rgba(0,0,0,0.05)]'>
        <img src={room.images[0]} alt='not foun '/>
       {
        index %2 === 0 &&  <Heading level='p' text='best seller' className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full capitalize'/>
       }
        <div className='p-4 pt-5'>
            <div className='flex items-center justify-between'>
              <Heading level='p' text={room.hotel.name} className='font-playpair text-xl font-medium text-gray-800'/>
              <div>
                <img src={assets.starIconFilled} alt="not found" />4.5
              </div>
            </div>
            <div className='flex items-center gap-1 text-xs'>
              <img src={assets.locationIcon} alt="not found " />
              <Heading level='span' text={room.hotel.address} className=''/>
            </div>
            <div className='flex items-center justify-between mt-4'>
              <p><span className='text-xl text-gray-800'>${room.pricePerNight}</span>/night</p>
              <button className='px-4 py-2 text-xs font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer capitalize'>book now</button>
            </div>
        </div>
    </Link>
  )
}

export default HotelCard