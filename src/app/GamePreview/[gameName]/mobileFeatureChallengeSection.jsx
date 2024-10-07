'use client'

import { GamePreviewLinkData } from '@/app/GamePreviewLinkData'
import { Montserrat } from 'next/font/google'
import React, { useEffect, useRef } from 'react'

const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})


const MobileFeatureChallengeSection = ({gameName}) => {
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
    <div className=' w-full h-[30dvh] overflow-y-scroll overflow-x-hidden p-2 bg-[#22212A] text-left'>
    <h5 className={`${mont.className} font-bold text-lg mb-3 px-5`} style={{color:`${GamePreviewLinkData[gameName].primaryClr}`}}>FEATURES</h5>

    <div ref={featuresRef} id='mobileFeatureDiv' style={{'--primaryClr':`${GamePreviewLinkData[gameName].primaryClr}`}} className={` w-full pl-7 pr-2 text-left space-y-3 font-bold md:text-base text-xs ${mont.className}`}></div>

    
    <h5 className={`${mont.className} font-bold my-4 pl-5 text-sm`}>Challenge Modes</h5>
          <div ref={challengesRef} className={` w-full text-left space-y-2 font-bold pl-7 pr-2 md:text-base text-xs ${mont.className}`}></div>

    </div>
  )
}

export default MobileFeatureChallengeSection
