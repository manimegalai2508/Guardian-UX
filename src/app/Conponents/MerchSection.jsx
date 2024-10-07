"use client";

import gsap from 'gsap';
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { MerchCarouselData } from '../MerchCarouselData';

const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const MerchSection = () => {
  const [slide, setslide] = useState(1);
  const [slideNum, setslideNum] = useState(MerchCarouselData.length);
  const [disableLeft, setdisableLeft] = useState(false);
  const [disableRight, setdisableRight] = useState(false);
  const timerRef = useRef();
  const merchRef = useRef(); 

  const slideLeft = () => {
    setdisableLeft(true)
  if(slide>1) {
      let newslideval = slide -1
      setslide(newslideval)
      gsap.to(".MerchSlide", {translateX:`-${newslideval*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableLeft(false)})})

     
    }
    else {
        let newslideval = slideNum;
        setslide(newslideval)
        gsap.to(".MerchSlide", {translateX:`-0%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableLeft(false)})})
        gsap.set('.MerchSlide', {translateX:`-${newslideval*100}%`, delay:1})

        
  }
}
const slideRight = () => {
    setdisableRight(true)
    
    if(slide<slideNum-1) {
      let newslideval = slide +1
      setslide(newslideval)
      gsap.to(".MerchSlide", {translateX:`-${newslideval*100}%`, duration:0.7, ease:"power1.inOut", onComplete:(() => {setdisableRight(false)})})

    }
    else {
      let newslideval = 0
      setslide(newslideval)
      gsap.to(".MerchSlide", {translateX:`-${(slideNum)*100}%`, duration:0.7, ease:"power1.inOut", onComplete:(() => {setdisableRight(false)})})
      gsap.set('.MerchSlide', {translateX:`0%`, delay:0.7})

    }
}


useEffect(() => {
  let bgSlide = slide===0? 4:slide;
  Array.from(document.querySelectorAll('.MerchSlideBG')).forEach((bg,i) =>  gsap.to(bg, {opacity:`${(i===(bgSlide-1))? 1:0}`, duration:0.7, ease:"power1.inOut"}))
  
  clearInterval(timerRef.current);
  timerRef.current = setInterval(() => {
    slideRight();
  }, 3000);

  return () => clearInterval(timerRef.current)
},[slide])


useEffect(() => {
  if(merchRef.current) {
    console.log(document.getElementById('defaultMerchBg').clientWidth);
    
    merchRef.current.style.width = `${document.getElementById('defaultMerchBg').clientWidth}px`
  }
},[])



  return (
    <section className=' w-full md_2:py-10 sm_0_1:py-32 py-20 bg-white relative'>

<div id='mobileMerchGradient' className=' absolute top-0 left-0 w-full h-full z-0' style={{clipPath:"polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)"}}></div>
      <h2 className=' md_2:text-9xl sm:text-7xl sm_1:text-5xl text-4xl font-burga md_2:text-[#FFA800] text-white md_2:mb-5 md_2:pb-0 sm_1:pb-5 pb-0 text-center md_2:bg-transparent relative z-10 '>MERCHANDISE</h2>
      <div className=' w-full sm_1:p-8 p-2 md_2:px-16 sm_1:px-0 px-0  relative'>
      <div className=' h-fit w-full flex justify-center items-center relative overflow-hidden z-10 md_2:bg-transparent'>
      <Image id='defaultMerchBg' src={MerchCarouselData[0].bgSrc} alt='background' width={1000} height={500} className=' MerchSlideBG xl:w-[70%] md_2:w-4/5 w-[90%] rounded-2xl object-contain object-center relative z-0'/>

      {MerchCarouselData && MerchCarouselData.slice(1, MerchCarouselData.length).map((data,i) => (
      <Image key={i} src={data.bgSrc} alt='background' width={1000} height={500} style={{zIndex:`${i+1}`}} className=' MerchSlideBG xl:w-[70%] md_2:w-4/5 w-[90%] rounded-2xl object-contain object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0'/>
      ))}
  <div ref={merchRef} className=' absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex justify-start items-center overflow-hidden'>
<Image src={MerchCarouselData[MerchCarouselData.length-1].merchSrc} alt='cap' width={500} height={500} className='MerchSlide -translate-x-full flex-shrink-0 w-full z-10'/>

  {MerchCarouselData && MerchCarouselData.map((data,i) => (
    <Image key={i} src={data.merchSrc} alt='cap' width={500} height={500} className='MerchSlide -translate-x-full flex-shrink-0 w-full z-10'/>
))}
<Image src={MerchCarouselData[0].merchSrc} alt='cap' width={500} height={500} className='MerchSlide -translate-x-full flex-shrink-0 w-full z-10'/>



  <button className={` active:scale-90 transition-all duration-300 bg-[#1F2029] sm_1:px-5 px-3 sm_0_1:py-2 py-1 lg:w-[25%] w-[35%] rounded-full lg:text-xl md:text-lg sm_0_1:text-base sm_1:text-sm text-[9px] absolute left-1/2 -translate-x-[49%] sm:bottom-[7%] bottom-[6%] z-10 ${mont.className} font-medium`}>Discover</button>
  <p className={` ${mont.className} font-black text-black lg:text-lg md:text-base sm_0_1:text-sm sm_1:text-xs text-[7px] absolute z-10 md_2:right-[15%] right-[10%] top-[20%]`}>Coming Soon...</p>
  </div>
        <button onClick={slideLeft} disabled={disableLeft} className=' absolute z-40 top-1/2 -translate-y-1/2 md:left-10 sm_1:left-4 left-6 rounded-full sm:p-1 p-[2px] bg-white shadow-xl'>
            <Image src={'/merchArrow.svg'} alt='Arrow Left' width={50} height={50} className=' rotate-180 sm:size-10 size-6 object-contain object-center'/>
        </button>
        <button onClick={slideRight} disabled={disableRight} className=' absolute z-40 top-1/2 -translate-y-1/2 md:right-10 sm_1:right-4 right-6 rounded-full sm:p-1 p-[2px] bg-white shadow-xl'>
            <Image src={'/merchArrow.svg'} alt='Arrow Right' width={50} height={50} className=' sm:size-10 size-6 object-contain object-center'/>
        </button>
      </div>

      </div>
      <div aria-hidden className=' md_2:block hidden absolute z-0 bottom-0 left-0 w-full'>
      <div aria-hidden className=' h-24 w-full bg-[#ffc700] pointer-events-none ' style={{clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%)"}}/>
      <div className=' bg-[#ffc700] h-24 w-full'></div>
      </div> 

    </section>
  )
}

export default MerchSection
