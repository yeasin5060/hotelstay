import React, { useEffect, useState } from 'react'
import HotelCard from './HotelCard'
import Heading from '../utils/Headig'
import { useAppContext } from '../context/AppContext'

const RecommendedHolet = () => {
    const {rooms , searchedCities } = useAppContext();
    const {recommended , setRecommended} = useState();

    const filterHotels = () => {
        const filteredHotels = rooms.slice().filter( room => searchedCities.inclides(room.hotel.city));
        setRecommended(filteredHotels);
    };

    useEffect(()=> {
        filterHotels()
    },[rooms , searchedCities])

    return recommended.length > 0 && (
        <div className='bg-[#D9D9D9] pt-[96px] pb-[78px]'>
            <div className='container'>
                <div className='text-center'>
                    <Heading level='h2' text='Recommended Hotels' className='text-[40px] text-[#252525] font-semibold font-playfair mb-[9px] capitalize'/>
                    <div className='flex items-center justify-center'>
                        <Heading level='p' text='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences' className='w-[696px] text-center text-4 text-[#6B7280E5] font-normal'/>
                    </div>
                    <div className='mt-[65px] flex items-center justify-between'>
                        {
                        recommended.slice(0,4).map((room , index)=>(
                            <HotelCard key={room._id} room={room} index={index}/>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedHolet