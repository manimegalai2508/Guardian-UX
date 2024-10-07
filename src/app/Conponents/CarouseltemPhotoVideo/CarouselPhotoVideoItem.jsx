import Image from 'next/image'
import React from 'react'

const CarouselPhotoVideoItem = ({data}) => {
  return (
    <div className=' w-full h-full'>
      {data.type==="photo"? 
      <Image src={data.src} alt={data.name} width={200} height={100} className=' w-full h-full object-cover object-center'/>
      :
      <video autoPlay muted playsInline={true} loop disablePictureInPicture className=' w-full h-full object-cover' >
        <source src={data.src} type='video/mp4' />
      </video>
      }
    </div>
  )
}

export default CarouselPhotoVideoItem
