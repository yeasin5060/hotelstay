import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[[#E4EEF84F]]'>
      <div className='container'>
        <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
              <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                  <div className='max-w-80'>
                      <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9 invert opacity-80' />
                      <p className='text-sm'>
                        Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
                      </p>
                      <div className='flex items-center gap-3 mt-4'>
                          {/* Instagram */}
                          <img className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" src={assets.instagramIcon} alt="not found" />
                          {/* Facebook */}
                          <img className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" src={assets.facebookIcon} alt="not found" />
                          {/* Twitter */}
                          <img className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" src={assets.twitterIcon} alt="not found" />
                          {/* LinkedIn */}
                          <img className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" src={assets.linkendinIcon} alt="not found" />
                      </div>
                  </div>

                  <div>
                      <p className=' font-playfair text-lg text-gray-800'>COMPANY</p>
                      <ul className='mt-3 flex flex-col gap-2 text-sm'>
                          <li><Link to="#">About</Link></li>
                          <li><Link to="#">Careers</Link></li>
                          <li><Link to="#">Press</Link></li>
                          <li><Link to="#">Blog</Link></li>
                          <li><Link to="#">Partners</Link></li>
                      </ul>
                  </div>

                  <div>
                      <p className=' font-playfair text-lg text-gray-800'>SUPPORT</p>
                      <ul className='mt-3 flex flex-col gap-2 text-sm'>
                          <li><Link to="#">Help Center</Link></li>
                          <li><Link to="#">Safety Information</Link></li>
                          <li><Link to="#">Cancellation Options</Link></li>
                          <li><Link to="#">Contact Us</Link></li>
                          <li><Link to="#">Accessibility</Link></li>
                      </ul>
                  </div>

                  <div className='max-w-80'>
                      <p className=' font-playfair text-lg text-gray-800'>STAY UPDATED</p>
                      <p className='mt-3 text-sm'>
                          Subscribe to our newsletter for inspiration and special offers.
                      </p>
                      <div className='flex items-center mt-4'>
                          <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                          <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                              {/* Arrow icon */}
                              <img className="w-4 h-4 text-white invert opacity-80" src={assets.arrowIcon} alt="not found" />
                          </button>
                      </div>
                  </div>
              </div>
              <hr className='border-gray-300 mt-8' />
              <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                  <p>© {new Date().getFullYear()} HomeStay. All rights reserved.</p>
                  <ul className='flex items-center gap-4'>
                      <li><Link to="#">Privacy</Link></li>
                      <li><Link to="#">Terms</Link></li>
                      <li><Link to="#">Sitemap</Link></li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer