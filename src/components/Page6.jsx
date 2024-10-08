import React, { useEffect, useState } from 'react'
import Index from './marquee/Index'
import { GoArrowUpRight } from "react-icons/go";
import gsap from 'gsap';

const Page6 = () => {
    const text = 'Follow Us';
    const social = ['Instagram', 'LinkedIn', 'Dribbble', 'GitHub', 'YouTube', 'Behance', 'Twitter'];
    const tl = gsap.timeline();
    const [indexval, setIndexval] = useState(null)

    const handleHightUp = (index) => {
        gsap.to(`.whiteBox_${index}`,{
            height: '100%',
            display: 'flex'
        })
        setIndexval(index);
    }
    const handleHightDown = (index) => {
        gsap.to(`.whiteBox_${index}`,{
            height: '0%',
            display: 'none'
        })
        tl.pause()
    }

    useEffect(()=>{

        document.querySelectorAll('.socialAnim').forEach((e, index)=>{
            tl.to(`.anim_${indexval}` , {
                x: '-100%',
                ease: 'none',
                repeat: -1,
                duration: 15
            })
            const startAnim = () => {
                tl.play()
            }
            e.addEventListener('mouseenter', startAnim)
            e.addEventListener('mouseleave', () => {
                tl.pause()
            })
            return e.removeEventListener('mouseenter', startAnim)
        })
    },[indexval])



  return (
    <div className='page6 w-full whitespace-nowrap overflow-x-hidden pt-[8vh] text-white bg-[#000000]'>
        <Index text={text}/>
        <div className='mt-[3vh] text-[5vw] lg:text-[2vw]'>
            <h1 className='uppercase px-4 md:px-[50px] py-[5vh] lg:text-[1.2vw]'>social media and contacts</h1>
            <div>
                {
                    social.map((elem, index) => {
                        return (
                            <div  key={index}  className='w-full h-fit relative'>
                                <div  onMouseEnter={() => {handleHightUp(index)}} onMouseLeave={() => {handleHightDown(index)}} className={`socialAnim border-t-[1px] cursor-pointer py-[5vh] px-4 lg:px-[50px] ${index === social.length-1 && 'border-b-[1px]'} border-[#3a3a3a] w-full flex justify-between items-center`}><h1 className={`cursor-pointer `}>{elem}</h1><GoArrowUpRight/></div>
                                <div className={`whiteBox_${index} hidden w-full h-[0] items-center bg-[#f1f1f1] pointer-events-none absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer`}>
                                    <div className='text-[black] overflow-x-hidden'>
                                        <div className={`anim_${index} socialAnimDiv inline-block mr-5`}>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                        </div>
                                        <div className={`anim_${index} socialAnimDiv inline-block mr-5`}>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                        </div>
                                        <div className={`anim_${index} socialAnimDiv inline-block mr-5`}>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                        </div>
                                        <div className={`anim_${index} socialAnimDiv inline-block mr-5`}>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                        </div>
                                        <div className={`anim_${index} socialAnimDiv inline-block mr-5`}>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                            <div className='inline-block'><div className='flex gap-5 items-center mr-5'><h1>{elem}</h1><GoArrowUpRight /></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='w-full flex flex-wrap md:gap-[15vw] text-[5vw] md:text-[2vw] lg:text-[1.6vw] px-[30px]'>
            <div className='py-[15vw] md:py-[8vw]'>
                <div className='uppercase flex gap-10 md:gap-5 items-center'>
                    <h1 className='text-[3vw] md:text-[1vw]'>main office</h1> <h1>901 n pitt street</h1>
                </div>
                <div>
                    Alexandria VA, 22314
                </div>
                <div className='btn6 cursor-pointer border-[1px] w-[60vw] md:w-[20vw] lg:w-[16vw] md:py-[10px] flex items-center justify-center py-[15px] rounded-full  mt-[40px]'>
                    <div className=' h-[8vw] md:h-[2.5vw] overflow-y-hidden'>
                        <div className='btnTxt6'>
                            <h1>info@cuberto.com</h1>
                            <h1>info@cuberto.com</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-[15vw] md:py-[8vw]'>
                <div className=' flex gap-10 md:gap-5 items-center'>
                    <h1 className='text-[3vw] md:text-[1vw] uppercase'>second office</h1> <h1>Na Perstyne</h1>
                </div>
                <div>
                    342/1, 11000 Prague
                </div>
                <div className='btn6 cursor-pointer border-[1px] w-[60vw] md:w-[20vw] lg:w-[16vw] md:py-[10px] flex items-center justify-center py-[15px] rounded-full  mt-[40px]'>
                    <div className=' h-[8vw] md:h-[2.5vw] overflow-y-hidden'>
                        <div className='btnTxt6'>
                            <h1>+1301 549 9309</h1>
                            <h1>+1301 549 9309</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page6