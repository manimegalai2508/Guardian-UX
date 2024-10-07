import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const SocialMediaLinksSection = () => {
  return (
    <div className=' w-full md_2:p-5 p-2 pb-16 pt-10  bg-white relative'>

    <div id='mobileSocialGradient' className=' md_2:hidden block absolute top-0 left-0 w-full h-full ' style={{clipPath:"polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)"}}></div>

        <h2 className=' lg:text-9xl md_2:text-7xl sm_1:text-5xl text-4xl font-burga md_2:text-[#FFA800] text-white lg:pt-20 pt-14 lg:pb-28 md_2:pb-20 pb-8 sm_1:px-10 px-4 relative z-10'>SOCIAL MEDIA <br /> LINKS</h2>
    <div className=' w-full flex justify-between items-end  sm:gap-5 gap-0'>

    <div className=' sm:w-1/2 w-[45%] lg:p-20 p-4 pr-0'>
        <div className=' w-full relative'>
            <Image src={'/ChatBubble.svg'} alt='chat bubble' width={200} height={150} className=' relative z-0 w-full object-contain object-center'/>
            <div className=' absolute z-10 top-0 left-0 w-full h-full md_2:p-5 sm_0_1:p-3 p-2 flex justify-center items-start flex-col md_2:gap-8 sm_1:gap-4 gap-2'>
            
                <div className=' flex justify-start items-center md:gap-5 gap-2 lg:px-10 md:px-4 sm_0_1:px-2 px-0'>
                <div className=' rounded-full md:p-3 sm_0_1:p-2 p-1 bg-[#353535]'>
                <Image src={'/twitter.svg'} alt='twitter' width={100} height={100} className=' md:size-8 sm_0_1:size-6 size-3 object-contain object-center'/>
                </div>
                <p className={`${mont.className} lg:text-2xl sm:text-lg sm_1:text-xs text-[9px] font-black text-white`}>TWITTER LINK</p>
                </div>
            
                <div className=' flex justify-start items-center md:gap-5 gap-2 lg:px-10 md:px-4 sm_0_1:px-2 px-0'>
                <div className=' rounded-full sm_0_1:p-2 p-1 bg-[#353535]'>
                <Image src={'/telegram.svg'} alt='twitter' width={100} height={100} className=' md:size-10 sm_0_1:size-6 size-3 object-contain object-center'/>
                </div>
                <p className={`${mont.className} lg:text-2xl sm:text-lg sm_1:text-xs text-[9px] font-black text-white`}>TELEGRAM LINK</p>
                </div>

            </div>
        </div>
    </div>

    <div className=' sm:w-1/2 w-[55%] relative z-10 h-full'>
        <Image src={'/SocialLinks.png'} alt=' dog' width={400} height={1000} className=' w-full md:px-10 sm:px-2 px-0 absolute -bottom-12 left-1/2 -translate-x-1/2 object-contain object-center z-10' />
    </div>
    </div>
    </div>
  )
}

export default SocialMediaLinksSection
