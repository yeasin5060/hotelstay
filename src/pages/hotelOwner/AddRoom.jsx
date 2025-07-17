import React, { useState } from 'react'
import Heading from '../../utils/Headig';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const AddRoom = () => {

  const {axios , getToken} = useAppContext()
  const [images,setImages] = useState({
    1:null,
    2:null,
    3:null,
    4:null
  });

  const [inputs , setInputs] = useState({
    roomType : '',
    pricePerNight:'0',
    amenities : {
      'Free Wifi' : 'false',
      'Free Breakfast' : 'false',
      'Room Service' : 'false',
      'Mountain View' : 'false',
      'Pool Access' : 'false',
    }
  })

  const [loading , setLoading] = useState(false)
  const onSubmitHandler = async (e) => {
    e.preventDefault()
      // check if all input are filled 

    if(!inputs.roomType || !inputs.pricePerNight || inputs.amenities ||  !Object.values(images).some( images => images)){
      toast.error('Please fill in all the details')
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData()
      formData.append('roomType' , inputs.roomType)
      formData.append('pricePerNight' , inputs.pricePerNight)

        // Converting amenities to array & keeping only enabled amenities
      const amenities = Object.keys(inputs.amenities).filter(keys => inputs.amenities[keys])
      formData.append('amenities' , JSON.stringify(amenities))

        // Adding Images to formdata
      Object.keys(images).forEach((key)=> {
        images[key] && formData.append('images' , images[key])
      })

      const {data} = await axios.post('/api/rooms/create', formData , {headers : {Authorization : `Bearer ${await getToken()}`}});

        
      if(data.success){
        toast.success(data.message);
        setInputs({
          roomType : '',
          pricePerNight:'0',
          amenities : {
            'Free Wifi' : 'false',
            'Free Breakfast' : 'false',
            'Room Service' : 'false',
            'Mountain View' : 'false',
            'Pool Access' : 'false',
          }
        });

        setImages({ 1: null , 2: null , 3:null , 4:null})
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }finally{
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <Heading level='h2' text='add room' className='text-[40px] text-[#252525] font-semibold font-playfair mb-[9px] capitalize'/>
      <Heading level='p' text='Fill in the details carefully and accurate room details, peicing and amenities to enhance the user booking experience'className='w-[696px] text-left text-4 text-[#6B7280E5] font-normal'/>

      {/*Upload Area For Images */}
      <Heading level='p' text='images' className='text-gray-800 mt-10 capitalize'/>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {
          Object.keys(images).map((key)=>(
            <label htmlFor={`roomImage${key}`} key={key}>
              <img className='max-h-13 cursor-pointer opacity-80' src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="not fonud" />
              <input type='file' accept='image/*' id={`roomImage${key}`} hidden onChange={ e => setImages({...images , [key] : e.target.files[0]})}/>
            </label>
          ))
        }
      </div>
      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
          <Heading level='p' text='room type' className='text-gray-800 mt4 capitalize'/>
          <select value={inputs.roomType} onChange={ e => setInputs({...inputs , roomType : e.target.value})} className='border opacity-70 border-gray-300 mt-1 p-2 rounded w-full'>
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>
        <div>
          <p className=' text-gray-800'>
            price <span className='text-xs'>/night</span>
          </p>
          <input type='number' placeholder='0' className='border border-gray-300 mt-1 rounded py-1 w-24' value={inputs.pricePerNight} onChange={ e => setInputs({...inputs , pricePerNight: e.target.value})}/>
        </div>
      </div>
      <Heading level='p' text='amenities' className='text-gray-800 mt-4'/>
      <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
        {Object.keys(inputs.amenities).map((amenity , index)=>(
          <div key={index}>
            <input type="checkbox" id={`amenities ${index + 1}`} checked = {inputs.amenities[amenity]} onChange={()=> setInputs({...inputs , amenities:{...inputs.amenities , [amenity]:!inputs.amenities[amenity]}})} />
            <label htmlFor={`amenities ${index + 1}`}> {amenity}</label>
          </div>
        ))}
      </div>
      <button className='bg-primary text-white py-2 px-8 rounded mt-8 cursor-pointer capitalize' disabled = {loading}>
        {loading ? 'adding...' :'add room'}
      </button>
    </form>
  )
}

export default AddRoom