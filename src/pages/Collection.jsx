import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../components/Assets/assets';

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/** FILTER OPTIONS **/}
       <div className='min-w-60'>
         <p onClick={() => setShowFilter(!showFilter)} class='my-2 text-xl items-center flex cursor-pointer gap-2 '>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt=''/>
         </p>
         {/** CATEGORY FILTER **/}
         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
             <p className='flex gap-2'>
               <input className='w-3' type='checkbox'value={'Men'} /> Men
             </p>
             <p className='flex gap-2'>
               <input className='w-3' type='checkbox'value={'Ladies'} /> Ladies
             </p>
             <p className='flex gap-2'>
               <input className='w-3' type='checkbox'value={'Kids'} /> Kids
             </p>
           </div>
         </div>
         {/** SubCategory Filter **/}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
           <p className='mb-3 text-sm font-medium'>Type</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
             <p className='flex gap-2'>
               <input className='w-3' type='checkbox'value={'Topwear'} /> Topwear
             </p>
             <p className='flex gap-2'>
               <input className='w-3' type='checkbox'value={'Bottomwear'} /> Bottomwear
             </p>
             <p className='flex gap-2'>
               <input className='w-3' type='checkbox'value={'Winterwear'} /> Winterwear
             </p>
           </div>
         </div>
       </div>

       {/** Right Side **/}
       <div className='flex-1'>
         <div className='flex justify-between text-base sm:text-2xl mb-4'>
           <title></title>
         </div>
       </div>
    </div>
  )
}

export default Collection;
