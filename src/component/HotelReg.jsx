import React, { useState } from 'react'
import { assets, cities } from '../assets/assets'
import Heading from '../utils/Headig'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const HotelReg = () => {

  const {setShowHotelReg , getToken , axios , setIsOwner } = useAppContext();
 
  const [name , setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact , setContact] = useState('');
  const [city , setCity] = useState('');

  const onSubmitHandler = async (event) => {
      try {
        event.preventDefault();
        const {data} = await axios.post('/api/hotel/register' , {name , address , contact , city} , {headers : {Authorization : `Bearer ${await getToken()}`}});

        if(data.success){
          toast.success(data.message);
          setIsOwner(true);
          setShowHotelReg(false);
        }else{
          toast.error(data.message);
        }

      } catch (error) {
        toast.error(error.message);
      }
  }
  return (
    <div onClick={ () => setShowHotelReg(false)} className='cursor-pointer'>
        <div className='container'>
            <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
                <form onSubmit={onSubmitHandler} onClick={(e)=> e.stopPropagation()} className='flex bg-white rounded-xl max-w-4xl max-md:mx-2  gap-2'>
                    <img className='w-1/2 rounded-xl hidden md:block' src={assets.regImage} alt="not found" />
                    <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
                      <img className='absolute top-4 right-4 h-4 w-4 cursor-pointer' src={assets.closeIcon} alt="not found" onClick={() => setShowHotelReg(false)}/>
                      <Heading level='p' text='Register Your Hotel' className='capitalize text-2xl font-semibold mt-6'/>
                      {/*Hotel Name */}
                      <div className='w-full mt-4'>
                        <label className='font-medium text-gray-500 capitalize' htmlFor='name'>hotel name</label>
                        <input id='name'  type='text' placeholder='Type here' onChange={(e) => setName(e.target.value)} value={name} className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
                      </div>
                       {/*Phone*/}
                      <div className='w-full mt-4'>
                        <label className='font-medium text-gray-500 capitalize' htmlFor='phone'>phone</label>
                        <input id='phone' type='text' placeholder='Type here' onChange={(e) => setContact(e.target.value)} value={contact} className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
                      </div>
                      {/*Address*/}
                      <div className='w-full mt-4'>
                        <label className='font-medium text-gray-500 capitalize' htmlFor='address'>Address</label>
                        <input id='address' type='text' placeholder='Type here' onChange={(e) => setAddress(e.target.value)} value={address} className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
                      </div>
                       {/*Select Drop Down City*/}
                       <div className='w-full mt-4'>
                        <label htmlFor='city' className='font-medium text-gray-500 capitalize'>
                          city
                        </label>
                        <select  id='city' onChange={(e) => setCity(e.target.value)} value={city} className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required>
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