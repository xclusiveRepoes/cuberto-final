import React, { useEffect, useRef, useState } from 'react'

import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.jpg'
import image4 from '../assets/5.png'
import image5 from '../assets/6.png'
import image6 from '../assets/7.png'
import image7 from '../assets/8.png'
import image8 from '../assets/9.png'
import image9 from '../assets/10.png'
import image10 from '../assets/11.png'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const Page5 = () => {
    var data = [
        {name: "How To Make Epic Website // Frontend development", img : image1},
        {name: "Cuberto Mouse Follower", img : image2},
        {name: "Making switch with SVG Distortion Effect", img : image3},
        {name: "UI/UX Design Tips/Volume9", img : image4},
        {name: "Liquid navigation in After Effects", img : image5},
        {name: "How to prepare your design portfolio on Behance", img : image6},
        {name: "Liquid Trasition in After Effects", img : image7},
        {name: "Dynamic marquee effect", img : image8},
        {name: "Cuberto Particles", img : image9},
        {name: "Cuberto Boilerplate(Full version)", img : image10},
    ]


    const carosel = useRef()
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(carosel.current.scrollWidth - carosel.current.offsetWidth)
    }, [])
    const handleMouseEnter = () => {
        gsap.to('.circle',{
            scale: 8
        })
        document.querySelector('.circle').innerHTML = 'Drag'
    }
    const handleMouseLeave = () => {
        gsap.to('.circle', {
            scale: 1
        })
        document.querySelector('.circle').innerHTML = ''
    }
    const handleCursorColor = () => {
        gsap.to('.circle, .line1, .line2', {
            backgroundColor: 'white'
        })
    }
    const handleBlackColor = () => {
        gsap.to('.circle , .line1, .line2', {
            backgroundColor: 'black',
        })
    }
    const handleZoomIn = (index) => {
        gsap.to(`.image_${index}`, {
            scale: 0.95
        })
    }
    const handleZoomOut = (index) => {
        gsap.to(`.image_${index}`, {
            scale: 1
        })
    }

    
  return (
    <div onMouseEnter={handleCursorColor} onMouseLeave={handleBlackColor} className='page3 w-full md:rounded-t-[4vw] leading-[1.1] bg-[#161616] text-white overflow-x-hidden '>
        <div className='flex flex-col w-full md:w-[70%] md:text-[10vw] items-center py-[30px] text-[15vw] lg:text-[8vw] md:h-[40vh] md:pt-[15vh] md:rounded-t-[5vw] lg:h-[60vh] justify-center'>
            <div>
                <div className='overflow-x-hidden'><h1>Development</h1></div>
                <div className='overflow-x-hidden -mt-[5vw] md:-mt-[3vw] lg:-mt-[2vw]'><h1>and design</h1></div>
                <div className='italic overflow-x-hidden -mt-[5vw] md:-mt-[3vw] lg:-mt-[2vw]'><h1>resources</h1></div>
            </div>
        </div>
        <div>
            <motion.div ref={carosel} drag='x' dragConstraints={{right: 0, left: -width}} className='w-full h-[60vh] xl:h-[100vh] flex items-center gap-[40px]'>
                {data.map((elem, index) => {
                    return(
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={index} className={`${index === 0 && 'lg:ml-[200px]'} w-[75vw] h-[58vw] md:w-[60vw] lg:w-[42vw] lg:h-[30vw] xl:w-[28vw] flex-shrink-0`}>
                            <div onMouseEnter={() => {handleZoomIn(index)}} onMouseLeave={() => {handleZoomOut(index)}} className={`image_${index} w-full h-[48vw] md:h-[37vw] lg:h-[25vw] xl:h-[19vw]`}><img src={elem.img} className={`w-full pointer-events-none rounded-3xl h-full object-cover`} /></div>
                            <p className='mt-[4vw] text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.5vw]'>{elem.name}</p>
                        </div>
                    )
                })}
            </motion.div>
        </div>
        
        <div className='md:w-full md:flex items-center justify-center'>
            <div className='w-full md:w-[40vw] px-[20px] text-[5vw] md:text-[2vw] h-[50vh] flex flex-col justify-center gap-10'>
                <p>We regularly release design courses, offer advice to newbie designers, walk you through creating awesome effects, and share source files.</p>
                <div className='button5 border-[1px] border-white w-[60vw] md:w-[35vw] md:h-[5vw] h-[10vw] flex items-center justify-center rounded-full cursor-pointer '><div className='relative w-full h-[2vw] flex items-center justify-center overflow-y-hidden '><div className='hov5 w-[52vw] md:w-[22vw] flex flex-col absolute top-0 '><p className='uppercase'>view all resources</p><p className='uppercase '>view all resources</p></div></div></div>
            </div>
        </div>

    </div>
  )
}

export default Page5