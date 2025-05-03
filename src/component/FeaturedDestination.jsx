import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Heading from '../utils/Headig'
import { useNavigate } from 'react-router-dom'


const FeaturedDestination = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-[#D9D9D9] pt-[96px] pb-[78px]'>
        <div className='container'>
            <div className='text-center'>
                <Heading level='h2' text='Featured Hotels' className='text-[40px] text-[#252525] font-semibold font-playfair mb-[9px] capitalize'/>
                <div className='flex items-center justify-center'>
                    <Heading level='p' text='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences' className='w-[696px] text-center text-4 text-[#6B7280E5] font-normal'/>
                </div>
                <div className='mt-[65px] flex items-center justify-between'>
                    {
                    roomsDummyData.slice(0,4).map((room , index)=>(
                        <HotelCard key={room._id} room={room} index={index}/>
                    ))
                    }
                </div>
                <div className='flex items-center justify-center mt-[65px]'>
                    <button onClick={() => {navigate('/rooms'); scrollTo(0,0)}} className='px-4 py-2 text-xs font-medium bg-white border border-gray-200 rounded hover:bg-gray-50 transition-all cursor-pointer capitalize'>view all destination</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedDestination