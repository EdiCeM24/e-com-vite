
import { assets } from "./Assets/assets";


const Hero = () => {
  return (
    <div className='mt-40 flex flex-col sm:flex-row border border-gray-400'>
        {/** Hero Left side **/}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
           <div className='flex items-center gap-2'>
              <h4 className='w-8 md:w-11 h-[2px] bg-[#417]'></h4>
              <h3 className='font-medium text-sm md:text-base'>OUR BESTSELLERS</h3>  
           </div>
           <h1 className='outfit-uniquifier text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
           <div className='flex items-center gap-2'>
             <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
             <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
           </div> 
        </div>
      </div>
      {/** Hero Right Side **/}
      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero;
