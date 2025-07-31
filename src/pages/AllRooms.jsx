import React, { useMemo, useState } from 'react'
import Heading from '../utils/Headig'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useSearchParams } from 'react-router-dom'
import StarRation from '../component/StarRation'
import { useAppContext } from '../context/AppContext'

const CheckBox = ({label , selected = false , onChange = () => {}}) => {
    return (
      <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm '>
        <input type='checkbox' checked ={selected} onChange={()=> onChange (label)}/>
        <span className='font-light select-none'>{label}</span>
      </label>
    )
}

const AllRooms = () => {

  const [searchParams , setSearchParams] = useSearchParams();
  const {rooms , navigate , currency} = useAppContext();
  const [openFilters , setOpenFilters] = useState();

  const [seletctedFilter , setSelectedFilter] = useState({
    roomType: [],
    priceRange : [],
  });

  const [selectedSort , setSelectedSort] = useState('')

  const roomTypes = [
    'Single Bed',
    'Double Bed',
    'Luxury Room',
    'Family Suite'
  ];

  const priceRanges = [
    '0 to $500',
    '500 to $1000',
    '1000 to $2000',
    '2000 to $3000'
  ];

  const sortOptions = [
    'Price Low to High',
    'Price High to Low',
    'Newest first'
  ]

    //Handle changes for fiiters and sorting
  const handleFilterChange = (checked , value , type) => {
      setSelectedFilter((prevFilters) => {
        const updatedFilters = {...prevFilters};
        if(checked){
          updatedFilters[type].push(value);
        }else{
          updatedFilters[type] = updatedFilters[type].filter(item => item !== value);
        }
        return updatedFilters;
      });
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };

    // Function to check if a room matches the selected room type
  const matchesRoomType = (room) => {
    return seletctedFilter.roomType.length === 0 || seletctedFilter.roomType.includes(room.roomType)
  };

    // Function to check if a room matches the selected price range
  const matchesPriceRange = (room) => {
     return seletctedFilter.priceRange.length === 0 || seletctedFilter.priceRange.some(range => {
      const [min , max] = range.split(' to ').map(Number);
      return room.pricePerNight >= min && room.pricePerNight <= max ;
     });
  };

    // function to sort rooms based on the selected sort option

  const sortRooms = ( a , b) => {
    if(selectedSort === 'Price Low to High'){
      return a.pricePerNight - b.pricePerNight;
    }

    if(selectedSort === 'Price High to Low'){
      return b.pricePerNight - a.pricePerNight;
    }

    if(selectedSort === 'Newest First'){
      return new Date(b.createdAt) - new Date(a.createdAt)
    }
    return 0 ;
  }

    // Filter destination
  const filterDestination = (room) => {
    const destination = searchParams.get('destination');
    if(!destination) return true ;
    return room.hotel.city.toLowerCase().includes(destination.toLowerCase())
  }

    // Filter and sort rooms based on the selected filteres and sort option
  const filteredRooms = useMemo (() => {
    return rooms.filter(room => matchesRoomType(room) && matchesPriceRange(room) && filterDestination(room).sort(sortRooms));
  },[rooms , selectedSort , seletctedFilter, searchParams]);

  //Clear all filter

  const clearFilter = () => {
    seletctedFilter( {
      roomTypes : [],
      priceRange : [],
    });
    selectedSort('');
    searchParams ({});
  }

  return (
    <div className='pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='container'>
            <div className='text-left'>
                <Heading level='h2' text='Hotel Rooms' className='text-[40px] font-medium text-[rgb(37,37,37)] font-playfair capitalize mb-[10px]'/>
                 <Heading level='p' text='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' className='w-[548px] text-[#252525] text-[16px] font-medium font-playfair'/>
                  <div className='flex items-start justify-between lg:flex-row gap-x-[124px]'>
                    <div className='mt-[40px] flex flex-col items-start border-b border-gray-300 gap-y-[50px]'>
                      {
                        filteredRooms.map((room , index)=> (
                          <div className=' flex flex-col md:flex-row items-start py-10 border-b border-gray-300 last:pb-30 last:border-0 gap-x-[35px] ' key={index}>
                              <div  onClick={() => {navigate(`/rooms/${room._id}`) , scrollTo(0,0)}} className='w-[250px] max-h-65 rounded-xl cursor-pointer'> 
                                <img className='w-[100%] max-h-[100%] rounded-xl shadow-lg object-center' src={room.images[0]} alt="not found" title='View Room ' />
                              </div>
                              <div className='text-left'>
                                <Heading level='p' text={room.hotel.city} className='text-[14px] font-medium text-[#838383] mb-[13px] capitalize'/>
                                <p onClick={() => {navigate(`/rooms/${room._id}`) , scrollTo(0,0)}}   className='text-[26px] text-[#343434] font-normal capitalize mb-[13px] cursor-pointer'>{room.hotel.name}</p>
                                <div className='flex items-center gap-x-[13px]'>
                                  <StarRation/>
                                  <Heading level='p' text='200+ reviews' className='text-[14px] font-normal text-[#000000]' />
                                </div>
                                <div className='flex text-gray-500 items-center text-sm gar-1 mt-2 '>
                                  <img src={assets.locationIcon} alt="not found" />
                                  <Heading level='span' text={room.hotel.address} className=''/>
                                </div>
                                {/*Room amenaties */}
                                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                                  {
                                    room.amenities.map((item,index)=>(
                                      <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F4FF]/70'>
                                        <img className='w-5 h-5' src={facilityIcons[item]} alt="not found" />
                                        <Heading level='p' text={item} className='text-xs'/>
                                      </div>
                                    ))
                                  }
                                </div>
                                {/*Room Price Per Night */}
                                <p className='text-xl font-medium text-gray-700'> ${room.pricePerNight}/night</p>
                              </div>
                          </div>
                        ))
                      }
                    </div>
                      { /* Filters */ }
                    <div className='bg-white w-90 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>
                        <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilters && 'border-b'}`}>
                          <Heading level='h4' text='filters' className=' text-base font-medium text-gray-800 uppercase '/>
                          <div className='text-xs cursor-pointer'>
                            <span onClick = {()=> setOpenFilters(!openFilters)} level='span' className='uppercase lg:hidden'>{openFilters ? 'HIDE' : 'SHOW'}</span>
                            <Heading level='span' text='clear' className='uppercase hidden lg:block'/>
                          </div>
                        </div>
                        <div className={`${openFilters? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
                          <div className='px-5 py-5'>
                            <Heading level='p' text='popular filters' className='font-medium text-gray-800 pb-2 capitalize'/>
                            {
                              roomTypes.map((room , index)=>(
                                <CheckBox key={index} label={room} selected = {seletctedFilter.roomType.includes(room)} onChange={(checked) => handleFilterChange (checked , room , 'roomType')}/>
                              ))
                            }
                          </div>
                          <div className='px-5 py-5'>
                            <Heading level='p' text='price range' className='font-medium text-gray-800 pb-2 capitalize'/>
                            {
                              priceRanges.map(( range, index)=>(
                                <CheckBox key={index} label={`${currency} ${range}`} selected = {seletctedFilter.priceRange.includes(range)} onChange={(checked) => handleFilterChange (checked , range , 'priceRange')}/>
                              ))
                            }
                          </div>
                          <div className='px-5 py-5 pb-7'>
                            <Heading level='p' text='sort by' className='font-medium text-gray-800 pb-2 capitalize'/>
                            {
                              sortOptions.map((option , index)=>(
                                <CheckBox key={index} label={option} selected = {selectedSort === option} onChange={()=> handleSortChange (option)}/>
                              ))
                            }
                          </div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default AllRooms