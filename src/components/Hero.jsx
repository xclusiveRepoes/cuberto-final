import React from 'react'
import video from '../assets/circleVid.mp4'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
  useGSAP(() => {
    gsap.from('.heroHeading', {
      y: '100%',
      duration: 1,
      stagger: .3,
      ease: "back.out(1.7)"
    })
    gsap.from('.heroBox', {
      y: 0,
      scale: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
  })
  return (
    <div className='hero overflow-x-hidden leading-[1.1] lg:h-[60vh] xl:h-[80vh] w-[85%] sm:w-[70%]  h-[60vh] flex flex-col justify-center items-end text-[10vw] sm:text-[9vw] lg:text-[7.5vw] lg:w-[70%] xl:w-[55%] xl:text-[6.8vw]'>
        <div className='inline-block overflow-y-hidden'><h1 className='heroHeading'>We are a digital</h1></div>
        <div className='flex items-center'><div className='heroBox w-[21vw] h-[13vw] sm:w-[150px] sm:h-[95px] rounded-full overflow-hidden lg:w-[14vw] xl:w-[11vw] mr-[2vw] xl:h-[7.5vw]'><video src={video} autoPlay muted loop className='w-full h-full object-cover'></video></div><div className='overflow-y-hidden'><h1 className='heroHeading'> <span className='thin italic '>design </span> and</h1></div></div>
        <div className='inline-block overflow-y-hidden'><h1 className='heroHeading'>motion agency</h1></div>
    </div>
  )
}

export default Hero