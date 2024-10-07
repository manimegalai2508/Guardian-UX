import { Kumbh_Sans, Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const kumbh = Kumbh_Sans({subsets:['latin']})
const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})

const RoadMapSection = () => {
  return (
    <section id='roadMapMobileGradient' className=' w-full md_2:bg-white bg-[#ffc700] relative md_2:pt-0 md_2:pb-0 pt-10 pb-16'>

    <h2 className=' lg:text-9xl md_1:text-8xl sm_1:text-7xl text-4xl text-white font-burga text-left sm:px-14 sm_1:px-8 px-4 pt-10 sm:pb-20 pb-8 relative z-10 md_2:bg-[#ffc700]'>ROAD MAP</h2>
      <div aria-hidden className=' md_2:block hidden h-24 w-full bg-[#ffc700] pointer-events-none' style={{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)"}}/>
      <div className=' w-full md_2:h-[500px] md_1:h-[400px] sm:h-[350px] sm_1:h-[300px] h-[200px] md_2:bg-white relative z-10'>
        <div className={` sm:w-1/2 sm_1:w-[45%] w-[39%] absolute md_1:left-10 sm:left-8 left-4 top-0 ${kumbh.className} font-bold md_2:text-4xl sm:text-2xl sm_1:text-lg text-xs text-[#353535]`}>
            <p>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.</p>
            <p className=' my-5 md_2:text-[#ffc700] md_2:text-4xl sm:text-2xl sm_1:text-xl text-sm md_2:font-bold font-black'>Join us as we grow and achieve new heights.</p>
        </div>
        <Image src={'/Road Map.png'} alt='Dog' width={500} height={600} className=' sm:w-[45%] sm_1:w-[55%] w-[60%] absolute md_1:right-10 sm:right-8 right-0 md_2:bottom-0 sm:bottom-[20%] bottom-0 object-contain object-center'/>
      </div>
      <div className={`roadmapGrid relative z-10 grid lg:px-24 md_2:px-20 sm:px-10 sm_1:px-4 px-2 py-5 grid-cols-4 md_2:gap-5 sm_1:gap-2 gap-1 overflow-hidden md_2:bg-white ${mont.className} font-black md_2:text-2xl md:text-xl sm:text-base sm_2:text-[11px] text-[9px] text-center`}>
        <div className=' md_2:bg-[#DBC70C] bg-[#01E33E] rounded-ss-3xl flex-col flex justify-between items-center'>
        <div className=' md:px-5 px-3 md:pt-5 pt-3'>
            <p>Community Building</p>
            <p className=' md_2:text-xl md:text-base sm:text-sm sm_1:text-[9px] text-[8px]'>and Initial Launch</p>
        </div>
            <Image src={'/roadmap 1.png'} alt='dog' width={300} height={400} className=' w-full object-contain object-center'/>
        </div>
        <div className=' md_2:bg-[#00D4D4] bg-[#3C7EFF] flex flex-col justify-between items-center'>
        <div className=' md:px-5 px-3 md:pt-5 pt-3'>
            <p>Merchandise</p>
            <p className=' md_2:text-xl md:text-base sm:text-sm sm_1:text-[9px] text-[8px]'>Store Launch</p>
        </div>
            <Image src={'/roadmap 2.png'} alt='dog' width={300} height={400} className=' w-full object-contain object-center'/>
        </div>
        <div className=' bg-[#D427FF] flex flex-col justify-between items-center'>
        <div className=' md:px-5 px-3 md:pt-5 pt-3'>
            <p>Community Events</p>
            <p className=' md_2:text-xl md:text-base sm:text-sm sm_1:text-[9px] text-[8px]'>and contests</p>
        </div>
            <Image src={'/roadmap 3.png'} alt='dog' width={300} height={400} className=' w-full object-contain object-center'/>
        </div>
        <div className=' bg-[#8F3A3C] flex-col rounded-se-3xl flex justify-between items-center'>
        <div className=' md:px-5 px-3 md:pt-5 pt-3'>
            <p>Expansions and New</p>
            <p className=' md_2:text-xl md:text-base sm:text-sm sm_1:text-[9px] text-[8px]'>Features</p>
        </div>
            <Image src={'/roadmap 4.png'} alt='dog' width={300} height={400} className=' w-full object-contain object-center'/>
        </div>
      </div>
    </section>
  )
}

export default RoadMapSection
