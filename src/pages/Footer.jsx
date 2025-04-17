import React from 'react'
import { assets } from '../components/Assets/assets';

const Footer = () => {
  return (
    <div className='bg-{#eee p-6'>
      <div className='w-full flex flex-cols sm:grid grid-cols-[3fr_1fr_1fr] gap-14 m'>
  
        <div>
           <span className='flex items-center gap-1'>
           <img src={assets.logo} className='mb-5 w-10' alt=''/>
           Edi_Mars
           </span>
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been there long ago. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been there long ago. 
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+234 702 626 6495</li>
            <li>contact@edimars.com</li>
          </ul>
        </div>

      </div>

      <div className='mt-10'>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ Edi_Mars.com - All Rights Reserved.</p>
      </div>  
    </div>
  )
}

export default Footer;
