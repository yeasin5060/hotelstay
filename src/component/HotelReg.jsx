import React from 'react'
import { assets, cities } from '../assets/assets'
import Heading from '../utils/Headig'

const HotelReg = () => {
  return (
    <div className='bg-white'>
        <div className='container'>
            <div className='fiext top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
                <form>
                    <img className='w-1/2 rounded-xl hidden md:block' src={assets.regImage} alt="not found" />
                    <div>
                      <img className='absolute top-4 right-4 h-4 w-4 cursor-pointer' src={assets.closeIcon} alt="not found" />
                      <Heading level='p' text='Register Your Hotel' className='capitalize text-2xl font-semibold mt-6'/>
                      {/*Hotel Name */}
                      <div className='w-full mt-4'>
                        <label className='font-medium text-gray-500 capitalize' htmlFor='name'>hotel name</label>
                        <input id='name'  type='text' placeholder='Type here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
                      </div>
                       {/*Phone*/}
                      <div className='w-full mt-4'>
                        <label className='font-medium text-gray-500 capitalize' htmlFor='phone'>phone</label>
                        <input id='phone' type='text' placeholder='Type here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
                      </div>
                      {/*Address*/}
                      <div className='w-full mt-4'>
                        <label className='font-medium text-gray-500 capitalize' htmlFor='address'>Address</label>
                        <input id='address' type='text' placeholder='Type here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
                      </div>
                       {/*Select Drop Down City*/}
                       <div>
                        <label htmlFor='city' className='font-medium text-gray-500 capitalize'>
                          city
                        </label>
                        <select id='city' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required>
                          <option value="" className='capitalize'>city</option>
                          {cities.map((city)=>(
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                       </div>
                       <button className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6 capitalize'>
                          register
                       </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default HotelReg