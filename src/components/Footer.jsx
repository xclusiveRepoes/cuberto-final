import React, { useState } from 'react'

import video from '../assets/ropes.mp4'

const Footer = () => {

  const [enter, setEnter] = useState(false)

  return (
    <div className='w-full min-h-[120vh] relative text-white'>
        <div className='w-full h-full absolute -z-[1]'>
          <video src={video} className={`w-full h-full object-cover ${enter && 'blur-[10px] transition-all ease-in-out transition-500'}`} autoPlay muted loop></video>
        </div>
        <div className='w-full h-screen flex items-center justify-center leading-[1.2]'>
          <div className='flex flex-col items-center text-[23vw] sm:text-[10vw]'>
            <h1>Have</h1>
            <h1 className='italic'>an idea?</h1>
            <div onMouseEnter={() => {setEnter(true)}} onMouseLeave={() => {setEnter(false)}} className='btnF border-[1px] rounded-full px-[5vw] cursor-pointer h-[22vw] text-[18vw] sm:text-[8vw] sm:h-[10vw] sm:px-[2vw]'>
              <div className='btnFContainer'>
                <h1 className='uppercase'>tell us</h1>
                <h1 className='uppercase'>tell us</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute sm:gap-[3vw] md:gap-[1vw] w-full bottom-0 px-[4vw] sm:px-[2vw] py-[3vh] sm:flex items-center'>
          <div className='btnF1 mb-[2vw] rounded-full border-[1px] w-fit py-[2vw] text-[4vw] sm:mb-0 sm:text-[1vw] cursor-pointer'>
            <div className='uppercase h-[5vw] sm:h-[1.5vw] px-[1.5vw] overflow-hidden'>
              <div className='btnF1C '>
                <h1>info@cuberto.com</h1>
                <h1>info@cuberto.com</h1>
              </div>
            </div>
          </div>
          <div className='btnF1 rounded-full border-[1px] w-fit  py-[2vw] text-[4vw] sm:text-[1vw] cursor-pointer'>
            <div className='uppercase h-[5vw] sm:h-[1.5vw] px-[1.5vw] w-fit overflow-hidden '>
              <div className='btnF1C '>
                <h1>+1301 549 9309</h1>
                <h1>+1301 549 9309</h1>
              </div>
            </div>
          </div>
          <h1 className='privacyF uppercase mt-[4vw] sm:absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-[1.5vw] sm:mt-0 text-[3vw] font-semibold cursor-pointer relative w-fit'>privacy policy <div className='lineF absolute w-0 h-[1px] bg-white left-[50%] translate-x-[-50%]'></div></h1>
        </div>
    </div>
  )
}

export default Footer