import { Kumbh_Sans } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const kumbh = Kumbh_Sans({subsets:['latin']})
const ProjectVisionSection = () => {
  return (
    <section className=' w-full bg-white'>
    <h2 className=' md_2:py-20 sm_1:py-10 py-2 sm_1:pt-20 pt-8 md:text-8xl sm:text-7xl sm_1:text-6xl sm_2:text-5xl text-4xl text-center font-burga text-[#ffc700]'>PROJECT VISION</h2>
      <div className=' w-full sm:px-5 px-2 relative'>
        <Image src={'/projectVision.png'} alt='dogs' width={1000} height={500} className=' md_2:block hidden relative z-10 w-[90%] mx-auto object-contain object-center'/>
        <Image src={'/projectVision-mobile.png'} alt='dogs' width={1000} height={500} className=' md_2:hidden block relative z-10 w-full mx-auto object-contain object-center'/>
        <p className={`${kumbh.className} relative z-10 font-bold md_2:text-3xl md:text-2xl sm:text-xl sm_1:text-lg sm_2:text-base text-sm px-5 text-center text-[#353535] lg:-translate-y-[60%] -translate-y-[20%]`}>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p>
  <div className=' md_2:block hidden absolute z-0 left-0 top-[10%] h-full w-full pointer-events-none'>
  <div aria-hidden className='  h-24 w-full bg-[#ffc700] pointer-events-none' style={{clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%)"}}/>
  <div id='ProjectVisionGradent' className='w-full h-[90%] md_2:block hidden'/>
  </div>
      </div>
    </section>
  )
}

export default ProjectVisionSection
