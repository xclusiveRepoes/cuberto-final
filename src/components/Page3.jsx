import React from 'react'
import c1 from '../assets/c1.mp4';
import c2 from '../assets/c2.mp4';
import c3 from '../assets/c3.mp4';
import c4 from '../assets/c4.mp4';
import c5 from '../assets/c5.mp4';
import c6 from '../assets/c6.mp4';
import c7 from '../assets/c7.mp4';
import c8 from '../assets/c8.mp4';
import c9 from '../assets/c9.mp4';
import c10 from '../assets/c10.mp4';
import video from '../assets/1.mp4'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
    var card1 = [
        {para : 'The First Super-App in Latin America',heading: "Punto Page", video: c1},
        {para : 'Official website of Riyadh Saudi Arabia"s capital',heading: "Riyadh", video: c2},        
        {para : 'Wine marketplace with interactive learning',heading: "Qvino", video: c3},
        {para : 'Run Hr, IT & Finance in one Place',heading: "Zelt", video: c4},
        {para : 'Cloud based network jmanagement',heading: "Cisco", video: c5},
    ]
    var card2 = [
        {para : 'A digital product for passwordless authentication',heading: "Kelvin Zero", video: c6},
        {para : 'The ultimate tool for building in the Web3 era',heading: "Magma", video: c7},        
        {para : 'Sales tool for increasing conversions',heading: "Flipaclip", video: c8},
        {para : 'Sales tool for increasing conversions',heading: "Potion", video: c9},
        {para : 'Galvanized steel metal frame manufacturer',heading: "Ferrumpipe", video: c10},
    ]

    const handleVideoPlay = (index) => {
        document.querySelector(`.video_${index}`).play()
        gsap.to('.circle', {
            scale: 8,
        })
        document.querySelector('.circle').innerHTML = 'Explore'
    }
    const handleVideoPause = (index) => {
        document.querySelector(`.video_${index}`).pause()
        gsap.to('.circle', {
            scale: 1,
        })
        document.querySelector('.circle').innerHTML = ''
    }
    const handleCircleColor = () => {
        gsap.to('.circle, .line1, .line2', {
            backgroundColor: 'white'
        })

    }
    const handleCircleColorPrime = () => {
        gsap.to('.circle, .line1, .line2', {
            backgroundColor: 'black'
        })
    }

    useGSAP(() => {
        gsap.from('.page3Heading',{
            y: '100%',
            duration: 1.2,
            stagger: .5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: '.page3',
                scrub: 3,
                end: 'top 0%',
                start: 'top 60%'
            }
        })
        gsap.from('.page3Box', {
            scale: 0,
            duration: 2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: '.page3',
                scrub: 3,
                end: 'top 0%',
                start: 'top 60%'
            }
        })
    })

  return (
    <div onMouseEnter={handleCircleColor} onMouseLeave={handleCircleColorPrime} className='page3 w-full bg-[#161616] py-10 sm:rounded-t-[40px] lg:rounded-t-[80px] md:pb-[30vh]' >
        <div className='w-full h-[30vh] sm:h-[40vh] lg:h-[80vh] sm:px-[100px] flex flex-col justify-center leading-[1.1] text-white text-[15vw] sm:text-[9vw] px-[40px]'>
            <div className='overflow-y-hidden'><h1 className='page3Heading'>Featured</h1></div>
            <div className=' flex items-center'>
                <div className='page3Box w-[22vw] sm:w-[14vw] sm:h-[10vw] rounded-full h-[15vw] mt-5 mr-4 overflow-hidden'><video src={video} autoPlay loop muted className='w-full h-full object-cover'></video></div><div className='overflow-y-hidden'>
                <h1 className='page3Heading flex items-center'><span className='italic'>projects</span></h1>
                </div>
            </div>
        </div>
        <div className='flex flex-col sm:flex sm:flex-row gap-[10vw] sm:ml-[100px] items-center'>
            <div>
                {card1.map((data, index) => {
                    return (
                        <div key={index} className='page3Vid w-[85vw] sm:w-[32vw] mb-[80px] sm:max-h-[100vh] '>
                            <video onMouseLeave={() => {handleVideoPause(index)}} onMouseEnter={() => {handleVideoPlay(index)}} loop muted src={data.video} className={`video_${index} w-[85vw] rounded-3xl sm:w-[32vw] cursor-pointer`}></video>
                            <div className='flex mt-5 text-[24px] sm:text-[2vw] flex-wrap'>
                                <p className='text-white '><span className='font-semibold'>{data.heading}</span> {data.para}</p>
                                <p className='text-white'></p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='sm:mt-[150px]'>
                {card2.map((data, id) => {
                    const index = id+5
                    return (
                        <div key={id + 5} className='page3Vid w-[85vw] sm:w-[32vw] mb-[80px] sm:max-h-[100vh]'>
                            <video onMouseLeave={() => {handleVideoPause(index)}} onMouseEnter={() => {handleVideoPlay(index)}} loop muted src={data.video} className={`video_${index} cursor-pointer w-[85vw] rounded-3xl sm:w-[32vw] `}></video>
                            <div className='flex mt-5 text-[24px] sm:text-[2vw] flex-wrap'>
                                <p className='text-white '><span className='font-semibold'>{data.heading}</span> {data.para}</p>
                                <p className='text-white'></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Page3