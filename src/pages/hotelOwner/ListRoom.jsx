import React, { useEffect, useState } from 'react'
import Heading from '../../utils/Headig'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ListRoom = () => {
  const [listRoom ,setListRoom] = useState([]);
  const {axios , getToken , user} = useAppContext();

  // Fetch Rooms of the Hotel Owner

  const fetchRooms = async () => {
    try {
      const {data} = await axios.get('/api/rooms/owner' , {headers : {Authorization : `Bearer ${await getToken()}`}});
      if(data.success){
        setListRoom(data.rooms)
        toast.success(data.message);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
       toast.error(error.message);
    }
  }

  //Toggle Avaialability of the Room

  const toggleAvailability = async (roomId) => {
    const {data} = await axios.post('/api/rooms/togol-availability' , {roomId} , {headers : {Authorization : `Bearer ${await getToken()}`}})

    if(data.success){
        toast.success(data.message);
        fetchRooms()
      }else{
        toast.error(data.message);
      }
  }

  useEffect(() => {
    if(user){
      fetchRooms()
    }
  },[user])
  return (
    <div>
      <Heading level='h2' text='room listing' className='text-[40px] text-[#252525] font-semibold font-playfair mb-[9px] capitalize'/>
      <Heading level='p' text='View ,edit or manage all listed rooms. Keep the information up-to date to provite the best exprience for users.'className='w-[696px] text-left text-4 text-[#6B7280E5] font-normal'/>
      <Heading level='p' text='all rooms' className='text-gray-500 mt-8 capitalize'/>
      <div className='w-full max-w-3xl lext-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3 '>
        <table className='w-full'>
           <thead className='bg-gray-50'>
              <tr className=''>
                <th className='py-3 px-4 font-medium text-gray-800 capitalize'>name</th>
                <th className='py-3 px-4 font-medium text-gray-800 capitalize max-sm:hidden'>fecilyti</th>
                <th className='py-3 px-4 font-medium text-gray-800 capitalize text-center'>price / night</th>
                <th className='py-3 px-4 font-medium text-gray-800 capitalize'>actions</th>
              </tr>
          </thead>
          <tbody className='text-sm'>
            {
              listRoom.map((room , insex)=>(
                  <tr key={insex}>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                      {room.roomType}
                    </td>
                     <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                      {room.amenities.join(', ')}
                    </td>
                     <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                      {room.pricePerNight}
                    </td>
                     <td className='py-3 px-4 text-red-500 border-t border-gray-300 text-sm text-center'>
                      <label htmlFor='' className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3'>
                        <input onChange={() => toggleAvailability(room._id)} type='checkbox' className='sr-only peer' checked ={room.isAvailable}/>
                        <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200'></div>
                        <span className='dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5'></span>
                      </label>
                    </td>
                  </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListRoom