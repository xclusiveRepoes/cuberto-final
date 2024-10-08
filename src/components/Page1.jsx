import React from 'react'
import video from '../assets/page1Vid.mp4'

const Page1 = () => {
  return (
    <div className='w-full h-[50vh] lg:h-[100vh] bg-black'>
      <video src={video} autoPlay muted loop className='w-[100%] h-[100%] object-cover'></video>
    </div>
  )
}

export default Page1