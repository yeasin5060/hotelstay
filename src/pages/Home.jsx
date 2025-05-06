import React from 'react'
import Hero from '../component/Hero'
import FeaturedDestination from '../component/FeaturedDestination'
import ExclusiveOffers from '../component/ExclusiveOffers'
import Testimonial from '../component/Testimonial'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
    </div>
  )
}

export default Home