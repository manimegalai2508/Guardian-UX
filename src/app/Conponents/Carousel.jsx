import gsap from 'gsap'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { SlideData } from '../SlideData'
import CarouselPhotoVideoItem from './CarouseltemPhotoVideo/CarouselPhotoVideoItem'

const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const Carousel = () => {
    const [active, setactive] = useState('ALL')
    const [slide, setslide] = useState(1);
    const [slideNum, setslideNum] = useState(0)
    const [currentData, setcurrentData] = useState([...SlideData])
    const [updatedSlideData, setupdatedSlideData] = useState([]);
    const [disableLeft, setdisableLeft] = useState(false)
    const [disableRight, setdisableRight] = useState(false)



    const setcarouselData = (currentArray) => {
        let newarr = []
        for (let i = 0; i < currentArray.length; i+=3) {
    
            const subarray = currentArray.slice(i, i + 3);

            // Check if subarray has at least one element before pushing
            if (subarray.length > 0) {
              newarr.push(subarray);
            } 
        }

        let num = Math.ceil(currentArray.length/3)-1
        setslideNum(num+2)


          
          newarr.push(newarr[0])
          newarr.unshift(newarr[newarr.length-2])
          setupdatedSlideData(newarr)
    }
  
    useEffect(() => {
        setcarouselData(currentData)
    },[])

    
    useEffect(() => {
        let newArr = [...SlideData]
        if(active==="PHOTOS") {
            newArr = newArr.filter((data) => data.type==="photo")
        }
        else if (active==="VIDEOS") {
            newArr = newArr.filter((data) => data.type==="video")
        }
        setcurrentData(newArr)
        setslide(1)
        gsap.set('.Slide', {translateX:"-100%"})
        setcarouselData(newArr)
    },[active])
  
    const slideLeft = () => {
        setdisableLeft(true)
      if(slide>1) {
          let newslideval = slide -1
          setslide(newslideval)
          gsap.to(".Slide", {translateX:`-${newslideval*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableLeft(false)})})
        }
        else {
            let newslideval = slideNum-1
            setslide(newslideval)
            gsap.to(".Slide", {translateX:`-0%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableLeft(false)})})
            gsap.set('.Slide', {translateX:`-${newslideval*100}%`, delay:1})
            
      }
    }
    const slideRight = () => {
        setdisableRight(true)
        
        if(slide<slideNum-1) {
        let newslideval = slide +1
        setslide(newslideval)
            gsap.to(".Slide", {translateX:`-${newslideval*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableRight(false)})})
        }
        else {
            let newslideval = 1
            setslide(newslideval)
            gsap.to(".Slide", {translateX:`-${slideNum*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableRight(false)})})
            gsap.set('.Slide', {translateX:`-100%`, delay:1})
        }
    }
  

  return (
    <section className=' md_2:bg-white w-full md_2:pb-10 md_1:pt-10 pt-5  relative z-10'>
    {/* TOP BAR TO SWITCH */}
        <div className={` w-full flex justify-center items-center sm:gap-7 gap-5 ${mont.className} font-black sm:text-base text-[10px] text-[#353535] sm:mb-7 mb-3`}>
            <button onClick={() => {setactive("ALL")}} className={`${active==="ALL" && " md_2:text-[#FFA800] text-white"}`}>ALL</button>
            <button onClick={() => {setactive("PHOTOS")}} className={`${active==="PHOTOS" && " md_2:text-[#FFA800] text-white"}`}>PHOTOS</button>
            <button onClick={() => {setactive("VIDEOS")}} className={`${active==="VIDEOS" && " md_2:text-[#FFA800] text-white"}`}>VIDEOS</button>
        </div>
        {/* CAROUSEL */}
        <div className=' w-full flex justify-center items-center sm:gap-7 gap-3 md:px-0 px-3'>
            <button onClick={slideLeft} disabled={disableLeft} className=' active:scale-90 transition-all duration-300 sm:w-10 w-6 flex-shrink-0 sm:p-2 p-1 aspect-[3/4] rounded-lg bg-[#353535]' style={{boxShadow:'4px 3px 10px rgba(0,0,0,0.65)'}}><Image src={'/Arrow.svg'} alt='Arrow Left' width={50} height={50} className=' w-fulll rotate-180'/></button>
            <div className=' sm:w-[80%] w-[90%] md:h-48 sm:h-28 sm_2:h-20 h-14 overflow-hidden'>

            <div className=" w-full h-full overflow-hidden flex justify-start items-center relative">
                {updatedSlideData.map((arr,i) => (
                    <div key={i} className='Slide -translate-x-full w-full flex-shrink-0 h-full flex justify-start items-center sm_2:gap-5 gap-2 sm:px-5 px-1 py-1'>
                    {arr.map((data, idx) => {
                    return <div key={idx} className=' h-full w-1/3 rounded-lg overflow-hidden md:bg-[#a6a6a6] bg-[#353535] sm:hover:ring-4 hover:ring-2 sm:hover:ring-[#353535] hover:ring-[#a6a6a6] flex justify-center items-center font-black text-black'><CarouselPhotoVideoItem data={data}/></div>
                    })}
                    </div>
                ))}
            </div>
            </div>
            <button onClick={slideRight} disabled={disableRight} className=' active:scale-90 transition-all duration-300 sm:w-10 w-6 flex-shrink-0 sm:p-2 p-1 aspect-[3/4] rounded-lg bg-[#353535]' style={{boxShadow:'4px 3px 10px rgba(0,0,0,0.65)'}}><Image src={'/Arrow.svg'} alt='Arrow Right' width={50} height={50} className=' w-full'/></button>
        </div>
    </section>
  )
}

export default Carousel
