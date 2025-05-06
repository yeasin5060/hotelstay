import React from 'react'
import Heading from '../utils/Headig'
import { testimonials } from '../assets/assets'
import StarRation from './StarRation'

const Testimonial = () => {
  return (
    <div className='bg-[#E4EEF84F] pt-[80px] pb-[112px]'>
        <div className='container'>
            <div className='text-center'>
                <Heading level='h2' text='What Our Guests Say' className='text-[40px] text-[#252525] font-semibold font-playfair mb-[9px] capitalize'/>
                <div className='flex items-center justify-center'>
                    <Heading level='p' text='Discover why discerning travelers choose QuickStay for their luxury accommodations around the world.' className='w-[641px] text-center text-4 text-[#6B7280E5] font-normal'/>
                </div>
                <div className='flex flex-wrap items-center justify-between gap-6 mt-20'>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className='bg-white p-6 rounded-xl shadow '>
                            <div className='flex items-center gap-3'>
                                <img className='w-12 h-12 rounded-full' src={testimonial.image} alt={testimonial.name} />
                                <div>
                                    <p className='font-playfair text-xl'>{testimonial.name}</p>
                                    <p className='text-gray-500'>{testimonial.address}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-1 mt-4'>
                                <StarRation/>
                            </div>
                            <p className='text-gray-500 text-left max-w-90 mt-4'>{testimonial.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial