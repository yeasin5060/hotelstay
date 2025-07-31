import React, { useState } from 'react'
import Heading from '../utils/Headig'
import { assets, cities } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
const Hero = () => {
  const {navigate , user , getToken , axios ,} = useAppContext()
  const {destination , setDestination} = useState('')
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 ls:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-center bg-cover min-h-[750px]'>
        <div className='container'>
            <div className='text-left mt-20'>
              <Heading level='p' text='The Ultimate Hotel Experience'className='w-[240px] bg-[#49B9FF]/50 px-3.5 px-1 rounded-full capitalize'/>
              <Heading level='h1' text='Discover Your Perfect
                Getaway Destination'className='text-2xl font-playfair md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'/>
              <Heading level='p' text="Unparalleled luxury and comfort await at the world's most exclusive
                hotels and resorts. Start your journey today."className='w-[475px] text-4 font-[400] md:text-base mt-2 text-white'/>
              <form className='w-[824px] bg-white text-gray-500 rounded-lg px-6 py-4 mt-[34px]  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

                <div>
                  <div className='flex items-center gap-2'>
                    <img className='h-4' src={assets.calenderIcon} alt="not found calendericon" />
                    <label htmlFor="destinationInput">Destination</label>
                  </div>
                  <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                  <datalist id='destinations'>
                    {
                      cities.map((city , index)=>(
                          <option value={city} key={index}/>
                      ))
                    }
                  </datalist>
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                      <img className='h-4' src={assets.calenderIcon} alt="not found calendericon" />
                      <label htmlFor="checkIn">Check in</label>
                    </div>
                    <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                      <img className='h-4' src={assets.calenderIcon} alt="not found calendericon" />
                      <label htmlFor="checkOut">Check out</label>
                    </div>
                    <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>

                <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                    <label htmlFor="guests">Guests</label>
                    <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
                </div>

                <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                  <img className='h-7' src={assets.searchIcon} alt="not found searchicon" />
                  <span>Search</span>
                </button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Hero