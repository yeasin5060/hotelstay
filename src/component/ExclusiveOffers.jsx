import React from 'react'
import Heading from '../utils/Headig'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='pt-[125px] pb-[196px] bg-white'>
        <div className='container'>
            <div className='text-left'>
                <div className='flex justify-between'>
                    <div className='text-left'>
                        <Heading level='h2' text='Exclusive Offers' className='text-[40px] text-[#252525] font-semibold font-playfair mb-[9px] capitalize'/>
                        <Heading level='p' text='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'className='w-[579px] text-left text-4 text-[#6B7280E5] font-normal'/>
                    </div>

                    <div className='text-center'>
                        <button onClick={() => {navigate('/rooms'); scrollTo(0,0)}} className='flex justify-end gap-x-[5px] px-4 py-2 text-xs font-medium bg-white border border-gray-200 rounded hover:bg-gray-50 transition-all cursor-pointer capitalize'>View All Offers
                        <img className='group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt="not found" />
                        </button>
                    </div>
                </div>
                <div className='mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                   {
                    exclusiveOffers.map((item)=> (
                        <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl  text-white bg-no-repeat bg-center bg-cover' style={{backgroundImage: `url(${item.image})`}}>
                            <Heading level='p' text={`${item.priceOff} % OFF`} className='px-3 py-1 absolute top-4 left-4 text-xs text-white bg-gray-800 rounded-full font-medium' />
                            <div>
                                <Heading level='p' text={item.title} className='text-2xl font-playfair font-medium' />
                                <Heading level='p' text={item.description} className=' w-[250px] text-xs text-white   font-medium' />
                                <Heading level='p' text={`Expires ${item.expiryDate}`} className='text-xs text-white/70 mt-3' />
                                <div className='text-center mt-4 mb-5'>
                                    <button onClick={() => {navigate('/rooms'); scrollTo(0,0)}} className='flex justify-center items-center gap-2  cursor-pointer capitalize'>View All Offers
                                        <img className='group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt="not found" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                   }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExclusiveOffers