"use client"
import { GameSlideData } from '@/app/GameSlideData'
import gsap from 'gsap'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const mont = Montserrat({subsets:['cyrillic']})
const GamesCarousel = () => {
    const [slide, setslide] = useState(0);
    const [currentSlide, setcurrentSlide] = useState(GameSlideData[0]);
    const [disableRight, setdisableRight] = useState(false);


    const slideRight = () => {
        setdisableRight(true);
        
        if(slide<GameSlideData.length-1) {
            // setslide((prev) => prev+1);
        let newslideval = slide +1
        setcurrentSlide(GameSlideData[newslideval]);
        setslide(newslideval)
            gsap.to(".GameSlide", {translateX:`-${newslideval*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableRight(false)})})
        }
        else {
            // setslide(0);
            let newslideval = 0
            setcurrentSlide(GameSlideData[newslideval]);
            setslide(newslideval)
            gsap.to(".GameSlide", {translateX:`-${GameSlideData.length*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableRight(false)})})
            gsap.set('.GameSlide', {translateX:`0%`, delay:1})
        };
    };

    //  AUTO PLAY
    useEffect(() => {
        let autoplay;
        clearInterval(autoplay);
        autoplay = setInterval(() => {            
            slideRight();
        }, 5000);

        return () => clearInterval(autoplay);
    },[slide])

  return (
        <div className=' w-full relative z-10'>
            {/* <button onClick={slideLeft} disabled={disableLeft} className=' active:scale-90 transition-all duration-300 w-10 flex-shrink-0 p-2 aspect-[3/4] rounded-lg bg-[#353535]' style={{boxShadow:'4px 3px 10px rgba(0,0,0,0.65)'}}><Image src={'/Arrow.svg'} alt='Arrow Left' width={50} height={50} className=' w-fulll rotate-180'/></button> */}
            <div className=' w-full h-full overflow-hidden flex justify-start items-center'>
 
                    {GameSlideData.map((data,i) => (
                        <div key={i} className=' flex-shrink-0 GameSlide h-full w-full xl:px-20 sm:px-12 px-5 overflow-hidden flex justify-center items-center'>
                            <div className=' xl:w-11/12 w-full rounded-2xl xl:h-[90dvh] lg:h-[85vh] lg:aspect-auto aspect-[16/10] border-4 border-white overflow-hidden'>
                                <Image src={data.src} alt={data.name} width={600} height={400} className=' w-full h-full object-cover object-center pointer-events-none'/>
                            </div>
                        </div>
                    ))}
                    <div className=' flex-shrink-0 GameSlide h-full w-full xl:px-20 sm:px-12 px-5 overflow-hidden flex justify-center items-center'>
                            <div className=' xl:w-11/12 w-full rounded-2xl xl:h-[90dvh] lg:h-[85vh] lg:aspect-auto aspect-[16/10] border-4 border-white overflow-hidden'>
                                <Image src={GameSlideData[0].src} alt={GameSlideData[0].name} width={600} height={400} className=' w-full h-full object-cover object-center pointer-events-none'/>
                            </div>
                        </div>

                    {/* DISCOVER BUTTON */}
                    <Link href={currentSlide.link}><button className={` active:scale-90 transition-all duration-300 absolute lg:bottom-32 sm:bottom-20 bottom-10 left-1/2 -translate-x-1/2 flex justify-center items-center sm:gap-3 gap-2 sm:px-7 px-4 sm:pr-5 pr-2 py-2 sm:text-lg text-[9px] font-black text-white rounded-full ${mont.className}`} style={{backgroundColor:`${currentSlide.color}`, boxShadow:"5px 5px 5px rgba(0,0,0,0.5)"}}>DISCOVER <Image src={'/Thin Arrow.png'} alt='arrow' width={22} height={20} className=' sm:h-5 h-3 object-contain object-center'/></button></Link>


            </div>
            <button onClick={slideRight} disabled={disableRight} className=' active:scale-90 transition-all duration-300 sm:w-10 w-7 flex-shrink-0 sm:p-2 p-[6px] aspect-[3/4] rounded-lg bg-[#353535] absolute top-1/2 -translate-y-1/2 sm:right-[12%] right-7' style={{boxShadow:'4px 3px 10px rgba(0,0,0,0.65)'}}><Image src={'/Arrow.svg'} alt='Arrow Right' width={50} height={50} className=' w-ful'/></button>
        </div>
  )
}

export default GamesCarousel
