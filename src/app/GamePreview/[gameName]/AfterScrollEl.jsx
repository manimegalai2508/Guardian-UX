'use client'
import { GamePreviewLinkData } from '@/app/GamePreviewLinkData'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'


const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})

const AfterScrollEl = ({gameName}) => {
    const featuresRef = useRef()
    const challengesRef = useRef()
    
    useEffect(() => {
        if(featuresRef.current) {
          featuresRef.current.innerHTML = GamePreviewLinkData[gameName].featuresHtml
        }
        if(challengesRef.current) {
            challengesRef.current.innerHTML = GamePreviewLinkData[gameName].challengeHtml
        }
      },[featuresRef, challengesRef])

  return (
    <div id='AfterScroll' className='w-full h-full absolute top-full left-0 z-10 md_2:px-24 md_1:px-16 px-8 md:pt-40 pt-24 opacity-0 pointer-events-none flex flex-col justify-around items-start'>
    <h5 className={`${mont.className} font-bold md:text-2xl text-xl my-3`} style={{color:`${GamePreviewLinkData[gameName].primaryClr}`}}>FEATURES</h5>
    <div ref={featuresRef} className={` lg:w-2/3 md_2:w-3/4 w-4/5 text-left space-y-4 font-bold md:text-base text-sm ${mont.className}`}></div>

    <h5 className={`${mont.className} font-bold mt-5 md:text-base text-sm`}>Challenge Modes</h5>
    <div ref={challengesRef} className={` lg:w-2/3 md_2:w-3/4 w-4/5 text-left space-y-2 font-bold pl-2 md:text-base text-sm ${mont.className}`}></div>

    <div className=' w-full mt-5 flex justify-start items-center gap-6'>
    <button className=' active:scale-90 transition-all duration-200 md:px-10 px-6 mx:pl-4 pl-2 md:py-3 py-2 flex justify-between items-center md:gap-5 gap-3 rounded-full bg-white'>
            <Image src={'/play.png'} alt='play' width={30} height={30} className=' object-contain object-center' />
            <p className=' font-hel-normal font-bold md:text-lg text-base text-[#201E26]'>COMING SOON</p>
          </button>
    <Link href={'/'}>
    <button className=' active:scale-90 transition-all duration-200 md:px-16 px-8 md:py-3 py-2 flex justify-between items-center gap-5 rounded-full bg-transparent md:border-4 border-2 border-white'>
            <p className=' font-hel-normal font-bold md:text-lg text-base text-white'>EXIT</p>
          </button>
    </Link>
    </div>
  </div>
  )
}

export default AfterScrollEl
