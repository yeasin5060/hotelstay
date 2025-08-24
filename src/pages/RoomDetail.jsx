import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, } from '../assets/assets'
import Heading from '../utils/Headig'
import StarRation from '../component/StarRation'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const RoomDetail = () => {
    const {id} = useParams();
    const [room , setRoom] = useState(null);
    const {getToken , axios ,navigate , rooms} = useAppContext();
    const [mainImage , setMainImage] = useState(null);
    const {checkInDate , setCheckInDate} = useState(null);
     const {checkOutDate , setCheckOutDate} = useState(null);
    const {geusts , setGeusts} = useState(1);
    const {isAvailable , setIsAvailable} = useState(false);


    useEffect(()=>{
      const room = rooms.find(room => room._id === id)
      room && setRoom(room)
      room && setMainImage(room.images[0])
    },[rooms]);

      //check if the room is Available
    const checkAvailability = async () => {
      try {
        //Check is Check-In Date is greater than Check-Out Date
        if(checkInDate >= checkOutDate){
          toast.error('Check-In Date sould bee less than Check-Out Date')
          return ;
        } 
        const {data} = await axios.post('/api/bookings/check-availability' , {room : id , checkInDate , checkOutDate})
        if(data.success){
          if(data.isAvailable){
            setIsAvailable(true);
            toast.success('Room is available');
          }else{
            setIsAvailable(false);
            toast.error('Room is not available');
          };
        }else{
          toast.error(data.message);
        };
      } catch (error) {
        toast.error(error.message);
      };
    };
    const onSubmitHandler = async (e) => {
     try {
      e.preventDefault();
      if(!isAvailable){
        return checkAvailability();
      }else{ 
        const {data} = await axios.post('/api/bookings/book' , {room : id , checkInDate , checkOutDate , geusts , paymentMethod : 'Pay at Hotel'} , {headers : {Authorization : `Bearer ${await getToken()}`}});
        if(data.success){
          toast.success(data.message);
          navigate('/my-bookings');
          scroll(0 , 0)
        }else{
          toast.error(data.message);
        };
      };
     } catch (error) {
        toast.error(error.message)
     };
    };
  return room && (
    <div className='container py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Room Details */}
      <div className='flex flex-col md:flex-row items-center md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span>
        </h1>
        <Heading level='p' text='20% OFF' className='uppercase text-sm font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full' />
      </div>
       {/* Room Raiting */}
      <div className='flex items-center gap-1 mt-2'>
        <StarRation/>
        <Heading level='p' text='200+ reviwes' className='ml-2'/>
      </div>
       {/* Room Address */}
      <div className='flex items-center gap-1 mt-2 text-gray-500'>
        <img src={assets.locationIcon} alt="not found" />
        <span>{room.hotel.address}</span>
      </div>
       {/* Room Images */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img className='w-full rounded-xl shadow-lg object-cover' src={mainImage} alt="not found" />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {
            room?.images.length > 1 && room.images.map((image , index)=>(
              <img className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline -3 outline-orange-500'}`} onClick={()=> setMainImage(image)} key={index} src={image} alt="not found" />
            ))
          }
        </div>
      </div>
      {/* Room Highlights */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <Heading level='h2' text='Experience Luxury Like Never Before' className='text-[#252525] capitalize text-3xl md:text-4xl font-playfair' />
          <div className='flex flex-wrap items-center mt-3 md-6 gap-4'>
            {room.amenities.map((item , index)=>(
              <div key={index} className='flex items-center gap-2 py-3 px-2 rounded-lg bg-gray-100'>
                <img className='w-5 h-5' src={facilityIcons[item]} alt="not found" />
                <Heading level='p' text={item} className='text-xs'/>
              </div>
            ))}
          </div>
        </div>
          {/*Room price Per Night */}
          <Heading level='p' text={`$ ${room.pricePerNight}/ night`} className=''/>
      </div>
      <form onSubmit={onSubmitHandler} className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15) p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
          <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500 '>
            <div className='flex flex-col'>
              <label htmlFor='checkInDate' className='font-medium capitalize'>
                check-in
              </label>
              <input onChange={(e) => setCheckInDate(e.target.value)} min={new Date().toString().split('T')[0]} type='date' id='checkInDate' placeholder='Check-In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
            </div>
            <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
            <div className='flex flex-col'>
              <label htmlFor='checkOutDate' className='font-medium capitalize'>
                check-out
              </label>
              <input onChange={(e) => setCheckOutDate(e.target.value)} min={checkInDate} disabled={!checkInDate} type='date' id='checkOutDate' placeholder='Check-out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
            </div>
            <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
            <div className='flex flex-col'>
              <label htmlFor='guests' className='font-medium capitalize'>
                guests
              </label>
              <input onChange={(e) => setGeusts(e.target.value)} value={geusts} type='number' id='guests' placeholder='1' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
            </div>
          </div>
          <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-90 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer capitalize'>
            {isAvailable ? 'book new' : 'check availability'}
          </button>
      </form>
       {/*Common Specification*/}
       <div className='mt-25 space-y-4'>
        {roomCommonData.map((spec , index)=>(
          <div key={index} className='flex items-start gap-2'>
            <img className='w-6.5' src={spec.icon} alt="not found" />
            <div>
              <Heading level='p' text={spec.title} className='text-base'/>
              <Heading level='p' text={spec.description} className='text-gray-500'/>
            </div>
          </div>
        ))}
       </div>
      <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
         <Heading level='p' text='Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.' className=''/>
      </div>
      {/*Hosted By */}
      <div className='flex flex-col items-center gap-4'>
        <div className='flex gap-4'>
          <img className='w-14 h-14 md:w-18 md-w-18 rounded-full' src={room.hotel.owner.image} alt="not found" />
          <div>
            <Heading level='p' text={`Hosted By ${room.hotel.name}`} className='text-ls md:text-xl capitalize'/>
            <div className='flex items-center mt-1'>
              <StarRation/>
              <Heading level='p' text='200+ reviews' className='ml-1'/>
            </div>
          </div> 
        </div>
        <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer capitalize'>contact now</button>
      </div>
    </div>
  )
}

export default RoomDetail
