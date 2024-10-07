'use client'

import { GamePreviewLinkData } from '@/app/GamePreviewLinkData'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ScrollBar = ({gameName}) => {
    const[scrolled, setscrolled] = useState(false)
    let swipeTemp = 0

    useEffect(() => {
        if(scrolled) {
            gsap.set("#AfterScroll", {pointerEvents:"all"});
            gsap.to("#AfterScroll", {top:"0", duration:0.5, opacity:1});

            gsap.to("#Heading", {top:"-40px", duration:0.5,});
            gsap.to("#SubHeading", {top:"-40px", duration:0.5,});
            
            gsap.set(".BeforeScroll", {pointerEvents:"none"});
            gsap.to(".BeforeScroll", {top:"-20px", duration:0.2, opacity:0});
            
        }
        else { 
            gsap.set("#AfterScroll", {pointerEvents:"none"});
            gsap.to("#AfterScroll", {top:"100%", duration:0.5, opacity:0, ease:"power1.in"});

            gsap.to("#Heading", {top:"0px", duration:0.5,});
            gsap.to("#SubHeading", {top:"0px", duration:0.5,});

            gsap.set(".BeforeScroll", {pointerEvents:"all"});
            gsap.to(".BeforeScroll", {top:"0px", duration:0.2, delay:0.4, opacity:1});
        }
    },[scrolled])

    const wheelHandler = (e) => {        
        if(e.deltaY>0 && !scrolled) {
            setscrolled(true);
        }
        else if(e.deltaY<0 && scrolled) {
            setscrolled(false)
        }
    }

    // DETECT TOUCH SWIPE FOR MOBILE
    const handleTouchStart = (e) => {
        swipeTemp = e.changedTouches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchEndY - swipeTemp;

        if (deltaY < 0 && !scrolled) {
            setscrolled(true);
        } else if (deltaY > 0 && scrolled) {
            setscrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', wheelHandler)
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
        if(window.innerWidth<640) {
            window.removeEventListener('wheel', wheelHandler);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('wheel', handleTouchEnd);
        }

        return () => {
            window.removeEventListener('wheel', wheelHandler);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('wheel', handleTouchEnd);
            
        }
    },[scrolled])

  return (
    <aside className=' fixed z-20 right-[5%] top-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-3 w-5'>
    {/* TOP BUTTON */}
    <button onClick={() => setscrolled(false)} disabled={!scrolled} className={` transition-all duration-500 aspect-square w-full rounded-md flex justify-center items-center`} style={{backgroundColor:`${!scrolled ? "rgba(255, 255, 255, 0.35)":`${GamePreviewLinkData[gameName].primaryClr}`}`}}>
        <Image src={'/ScrollArrow.png'} alt='arrow' width={10} height={10} className={`${scrolled && " invert"} w-1/2 h-1/2 object-contain object-center`}/>
    </button>
{/* BAR */}
    <button onClick={() => setscrolled((prev) => !prev)} className=' w-3/4 h-40 rounded-full bg-[#d9d9d9]/35 relative'>
        <div className={` h-1/2 absolute transition-all duration-500 left-0 w-full rounded-full ${!scrolled?" top-0":" top-1/2"}`} style={{backgroundColor:`${GamePreviewLinkData[gameName].primaryClr}`}}></div>
    </button>
    {/* BOTTOM BUTTON */}
    <button onClick={() => setscrolled(true)} disabled={scrolled} className={` transition-all duration-500 aspect-square w-full rounded-md flex justify-center items-center`} style={{backgroundColor:`${scrolled ? "rgba(255, 255, 255, 0.35)":`${GamePreviewLinkData[gameName].primaryClr}`}`}}>
        <Image src={'/ScrollArrow.png'} alt='arrow' width={10} height={10} className={`${!scrolled && " invert"} rotate-180 w-1/2 h-1/2 object-contain object-center`}/>
    </button>
 

      
    </aside>
  )
}

export default ScrollBar
