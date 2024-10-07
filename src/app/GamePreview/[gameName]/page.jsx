import { GamePreviewLinkData } from '@/app/GamePreviewLinkData'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import AfterScrollEl from './AfterScrollEl'
import ScrollBar from './ScrollBar'
import MobileFeatureChallengeSection from './mobileFeatureChallengeSection'

const bebas = Bebas_Neue({subsets:['latin'], weight:['400'], adjustFontFallback:false})
const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})

const Page = ({params}) => {



  return (
    <div className=' w-screen h-dvh overflow-hidden bg-black relative'>
      {!!GamePreviewLinkData[params.gameName] ?
      <>
      <main className=' sm:block hidden w-full h-full md_2:px-24 md_1:px-16 px-8 md_2:py-10 py-8'>
        <div className=' w-full h-full relative z-10 flex flex-col justify-between items-center'>
<div className=' w-full'>
<h1 id='Heading' className=' relative font-baron text-white md_2:text-7xl md:text-6xl text-5xl md:my-4 my-2'>{GamePreviewLinkData[params.gameName].name}</h1>
          <h2 id='SubHeading' className={`${bebas.className} relative md_2:text-4xl md:text-3xl text-2xl tracking-[0.25em] md:my-5 my-0`} style={{color:`${GamePreviewLinkData[params.gameName].primaryClr}`}}>{GamePreviewLinkData[params.gameName].subname}</h2>

          <div className='BeforeScroll w-full relative'>
            <p className={`${mont.className} font-bold text-white md_1:text-lg text-base md_2:w-1/3 md:w-1/2 w-2/3 md:mt-0 mt-3`}>{GamePreviewLinkData[params.gameName].desc}</p>


            <button className=' active:scale-90 transition-all duration-200 md:px-10 px-6 md:pl-4 pl-2 md:py-3 py-2 my-7 flex justify-between items-center md:gap-5 gap-3 rounded-full' style={{backgroundColor:`${GamePreviewLinkData[params.gameName].primaryClr}`}}>
              <Image src={'/play.png'} alt='play' width={30} height={30} className=' object-contain object-center' />
              <p className=' font-hel-normal font-bold md:text-lg text-base text-[#201E26]'>COMING SOON</p>
            </button>
          </div>
          </div>

<div className=' w-full BeforeScroll'>
<h4 className={` ${mont.className} font-bold text-white md_2:text-3xl md:text-2xl text-xl mb-5`}><span style={{color:`${GamePreviewLinkData[params.gameName].primaryClr}`}}>GAME</span> PREVIEWS</h4>

<div className=' w-full flex justify-start items-center gap-5 overflow-x-scroll'>
  {GamePreviewLinkData[params.gameName].previewImgs.map((src,i) => <Image key={i} src={src} alt='preview' width={200} height={100} className=' h-40 rounded-2xl w-auto border border-white'/>)}
</div>
</div>

        </div>
          <ScrollBar gameName={params.gameName}/>

          <AfterScrollEl gameName={params.gameName}/>
      <Image src={GamePreviewLinkData[params.gameName].src} alt={GamePreviewLinkData[params.gameName].name} width={1000} height={700} className=' absolute top-0 left-0 w-screen h-dvh object-cover object-center pointer-events-none z-0'/>
      </main>
      <main className=' sm:hidden w-screen h-dvh flex flex-col justify-between items-center'>
      <div className=' w-full flex-shrink relative h-full'>
        <Image src={GamePreviewLinkData[params.gameName].mobileSrc} alt={GamePreviewLinkData[params.gameName].name} fill className=' object-cover object-center opacity-60'/>

        <button className=' absolute z-10 left-1/2 -translate-x-1/2 bottom-5 active:scale-90 transition-all duration-200 pl-2 px-4 py-2 flex justify-between items-center gap-2 rounded-full' style={{backgroundColor:`${GamePreviewLinkData[params.gameName].primaryClr}`}}>
              <Image src={'/play.png'} alt='play' width={20} height={20} className=' object-contain object-center' />
              <p className=' font-hel-normal font-bold text-xs h-3 text-[#201E26]'>PLAY</p>
            </button>
        </div>

        <div className=' w-full flex-shrink-0 text-center bg-[#2B2934]'>
          
        <h1 id='Heading' className=' relative font-baron text-white text-4xl mt-2'>{GamePreviewLinkData[params.gameName].name}</h1>
        <h2 id='SubHeading' className={`${bebas.className} relative text-lg tracking-[0.2em] mb-2`} style={{color:`${GamePreviewLinkData[params.gameName].primaryClr}`}}>{GamePreviewLinkData[params.gameName].subname}</h2>

        <div className=' w-full bg-[#22212A]'>
        <p className={`${mont.className} font-bold text-sm p-2 px-4`} style={{color:`${GamePreviewLinkData[params.gameName].primaryClr}`}}>&quot;{GamePreviewLinkData[params.gameName].desc}&quot;</p>
        </div>

        <div className=' w-full p-2 text-left'>
          <h4 className={` ${mont.className} font-bold text-white text-lg px-5 mb-3`}><span style={{color:`${GamePreviewLinkData[params.gameName].primaryClr}`}}>GAME</span> PREVIEWS</h4>
          <div className=' w-full h-[13dvh] overflow-x-visible overflow-y-hidden flex justify-start items-center gap-1'>
          {GamePreviewLinkData[params.gameName].previewImgs.map((src,i) => <Image key={i} src={src} alt='preview' width={200} height={100} className=' h-full rounded-xl w-auto border border-white'/>)}
          </div>

        </div>

<MobileFeatureChallengeSection gameName={params.gameName}/>

        </div>

      </main>
      </> 
      :
      <div className=' w-screen h-dvh flex justify-center items-center text-3xl text-center bg-black text-white font-bold'>
        Invalid Link
      </div>
      }
    </div>
  )
}

export default Page
