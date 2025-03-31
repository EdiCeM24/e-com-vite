import React from 'react'
import { assets } from '../components/Assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
      
      <div>
        <img src={assets} alt=''/>
      </div>

    </div>
  )
}

export default OurPolicy;
