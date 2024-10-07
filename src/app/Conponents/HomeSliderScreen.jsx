'use client'
import { Kumbh_Sans, Montserrat } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import gsap from 'gsap'
import ProjectVisionSection from './ProjectVisionSection'
import RoadMapSection from './RoadMapSection'
import TokenomicsSection from './TokenomicsSection'
import MerchSection from './MerchSection'
import SocialSection from './Games components/GamesSection'
import SocialMediaLinksSection from './SocialMediaLinksSection'
import GameSection from './Games components/GamesSection'

const kumbh = Kumbh_Sans({subsets:['latin']})
const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const HomeSliderScreen = () => {
    const [Open, setOpen] = useState(false);
    const [swipe, setswipe] = useState(null)
    let swipeTemp = 0

    const handleOpeningSlider = (e) => {
        if(e.deltaY >0) {
            setOpen(true)
            gsap.to('#HomeSlider', {bottom:"0%", duration:1})
            gsap.set('#HomeSlider', {overflow:'scroll'})
            gsap.set('#SliderContentHideBar', {display:'none'})
        }
    };

    const handleClosingSlider = (e) => {
        let mainSlider = document.getElementById('HomeSlider') 

        if(mainSlider.scrollTop === 0 && e.deltaY<0) {
            setOpen(false)
            gsap.to('#HomeSlider', {bottom:"-85%", duration:1})
            gsap.set('#HomeSlider', {overflow:'hidden'})
        }
    }

// DETECT TOUCH SWIPE FOR MOBILE
    const handleTouchStart = (e) => {
        swipeTemp = e.changedTouches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchEndY - swipeTemp;

        if (deltaY < 0) {
            setswipe('UP');
        } else if (deltaY > 0) {
            setswipe('DOWN');
        }
    };
 
    useEffect(() => {
        let mainSlider = document.getElementById('HomeSlider')
        const touchStartHandler = (e) => handleTouchStart(e);
        const touchEndHandler = (e) => handleTouchEnd(e);

        window.addEventListener('touchstart', touchStartHandler);
        window.addEventListener('touchend', touchEndHandler);

        if (!Open) {
            const wheelHandler = (e) => handleOpeningSlider(e);
            window.addEventListener('wheel', wheelHandler);

            return () => {
                window.removeEventListener('wheel', wheelHandler);
            };
        }
        else {
            if(mainSlider) {
                mainSlider.addEventListener('wheel', handleClosingSlider)
                return () => {
                    mainSlider.removeEventListener('wheel', handleClosingSlider)
                }
            }
        }
        return () => {
            window.removeEventListener('touchstart', touchStartHandler);
            window.removeEventListener('touchend', touchEndHandler);
            window.removeEventListener('wheel', wheelHandler);
        }
    }, [Open])
    
    // TO MAKE SURE THE SLIDER SHOW THE TOP IN THE BEGINING
    useEffect(() => {
        let mainSlider = document.getElementById('HomeSlider')
        if(mainSlider) {
            mainSlider.scrollTo(0,0)
        }
    },[])


    const OpeningORClosingSlider = () => {
        if(!Open) {
            setOpen(true)
            gsap.to('#HomeSlider', {bottom:"0%", duration:1})
            gsap.set('#HomeSlider', {overflow:'scroll'})
            gsap.set('#SliderContentHideBar', {display:'none'})

        }
        else {
            setOpen(false)
            gsap.to('#HomeSlider', {bottom:"-85%", duration:1})
            gsap.set('#HomeSlider', {overflow:'hidden'})
        }
    }


    useEffect(() => {
        if(swipe === "UP") {
            setOpen(true)
            gsap.to('#HomeSlider', {bottom:"0%", duration:1})
            gsap.set('#HomeSlider', {overflow:'scroll'})
            gsap.set('#SliderContentHideBar', {display:'none'})

        }
        else if(swipe === "DOWN") {
            let mainSlider = document.getElementById('HomeSlider')
            if(mainSlider.scrollTop === 0) {
                setOpen(false)
                gsap.to('#HomeSlider', {bottom:"-85%", duration:1})
                gsap.set('#HomeSlider', {overflow:'hidden'})
            }
        }
    },[swipe]) 

  return (
    <main id='HomeSlider' className=' size-11/12 fixed z-50 rounded-xl md:bottom-[-85%] bottom-[-88%] left-1/2 -translate-x-1/2 overflow-hidden bg-white'>
    <div id='SliderContentHideBar' className=' bg-[#ffc700] sm:py-4 py-3 flex justify-center items-center sticky top-0 left-0 w-full z-50'>
        <button onClick={OpeningORClosingSlider} className=' rounded-full sm:bg-[#FFF6A1] bg-[#353535] sm:w-32 w-20 sm:h-3 h-2'></button>
    </div>
    {/* FIRST SECTION */}
    <section className=' relative xl:h-[130%] md_2:h-[110%] w-full md_2:pb-0 sm_1:pb-20 pb-16 bg-white'>
    <div className=' sm:py-4 py-3 flex justify-center items-center relative z-10'>
        <button onClick={OpeningORClosingSlider} className=' rounded-full sm:bg-[#FFF6A1] bg-[#353535] sm:w-32 w-20 sm:h-3 h-2'></button>
    </div>

    <div className=' md_1:w-1/2 md:w-1/3 sm_1:w-[35%] sm_2:w-2/5 w-[45%] ml-auto relative z-10 text-right md_1:pr-14 sm_1:pr-8 pr-5'>
        <h3 className={` text-[#F76902]/80 lg:text-6xl md_1:text-5xl sm:text-3xl text-xl ${mont.className} font-black md_1:my-12 md:my-8 my-6 md_1:mb-10 md:mb-5 sm_1:mb-3 mb-0`}>History Of</h3>
        <p className=' font-burga lg:text-9xl md_1:text-8xl sm:text-6xl text-4xl text-white md:my-6 sm:my-4 my-2'>ALABAY</p>
        <p className={` text-[#353535] ${kumbh.className} font-bold lg:text-3xl md_1:text-2xl sm:text-lg text-sm`}>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
        {/* <p className={` md_1:hidden block text-[#353535] ${kumbh.className} font-bold text-lg`}>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. <span className=' '> Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</span></p> */}
    </div>
    <Image src={'/sliderfirstDog.png'} alt='dog' width={700} height={1000} className=' pointer-events-none absolute z-10 left-0 sm:top-[10%] top-[18%] md_1:w-1/2 md:w-2/3 sm_1:w-[64%] sm_2:w-3/5 w-[55%] object-contain object-center '/>

    <div className=' md_2:hidden block w-full'>
{/* CAROUSEL SECTION (MOBILE) */}
        <Carousel/>
    </div>
    <div id='HomeSliderGradient' className=' absolute top-0 left-0 z-0 pointer-events-none w-full h-full'/>
    </section>
<div className=' w-full md_2:block hidden'>

    <Carousel/>
</div>

<ProjectVisionSection/>
<RoadMapSection/>
<TokenomicsSection/>
<MerchSection/>
<GameSection/>
<SocialMediaLinksSection/>
    </main>
  )
}

export default HomeSliderScreen
