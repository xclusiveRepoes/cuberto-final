import React from 'react'
import video from '../assets/page4.mp4'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {

    useGSAP(() => {
        gsap.from('.page3text',{
            y: '100%',
            duration: 1.2,
            ease: "back.out(1.7)",
            stagger: .5,
            scrollTrigger: {
                trigger: '.page4',
                scrub: 2,
                end: 'top 3%'
            }
        })
        gsap.from('.page4Vid', {
            scale: 0,
            duration: 2,
            scrollTrigger: {
                trigger: '.page4',
                scrub: 2,
                // end: 'top 3%'
            }
        })
    })

  return (
    <div className='page4 w-full rounded-t-[4vw] -mt-[5vh] bg-white md:pb-[20vh]'>
        <div className='w-[100%] mb-10 px-4 py-10 text-[18vw] md:text-[10vw] md:w-[70%] md:flex md:flex-col items-center leading-[1.1] md:h-[70vh] justify-center'>
            <div>
                <div className='overflow-y-hidden'><h1 className=' page3text font-normal'>Our</h1></div>
                <div className='overflow-y-hidden pr-5'><h1 className='page3text italic font-[100]'>philosophy</h1></div>
            </div>
        </div>
        <div className='px-6 md:flex md:justify-around leading-[1.1] w-[100%] md:items-center pb-[15vh]'>
            <div className='hidden md:flex w-[50%] items-center justify-center'>
                <video src={video} autoPlay muted loop className='page4Vid w-[30vw] object-cover hidden md:block'></video>
            </div>
            <div className='md:w-[50%] md:px-[70px] '>
                <p className='font-[300] text-[5.5vw] sm:text-[3vw] md:text-[1.7vw] lg:px-[80px]'>
                    In our team, developers work alongside designers, strategists and analysts. Cuberto doesn't do cookie-cutter solutions and we build products exactly as they were during the design phase, no short cuts or simplifications. <br /><br />

                    We're driven by user‑centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Page4