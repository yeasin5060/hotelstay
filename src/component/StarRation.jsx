import React from 'react'
import { assets } from '../assets/assets'

const StarRation = ({ration = 4}) => {
  return (
    <>
        {Array(5).fill('').map((_, index ) => (
           <img src={ration > index ? assets.starIconFilled : assets.starIconOutlined} alt="not found" className='w-4.5 h-4.5' />
        ))}
    </>
  )
}

export default StarRation