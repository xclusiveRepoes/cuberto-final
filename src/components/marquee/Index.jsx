import React, { useEffect } from 'react'
import gsap from 'gsap'


const Index = (props) => {
    const text = props.text;
    const tl = gsap.timeline({paused: true})
    useEffect(() => {
        tl.to('.anim1', {
            x: '-200%',
            duration: 15,
            ease: 'none',
            repeat: -1
        })
        window.addEventListener('wheel', (e) => {
            if(e.deltaY>0){
                tl.play()
            }
            else{
                tl.reverse()
            }
        })
    })
  return (
        <div className='anim1Container text-[15vw] md:text-[10vw]'>
            <div className='anim1 inline-block'>
                <div className='mr-[10vw] md:mr-[6vw] inline-block'><h1>{text}</h1></div>
                <div className='mr-[10vw] md:mr-[6vw] inline-block'><h1>{text}</h1></div>
                <div className='mr-[10vw] md:mr-[6vw] inline-block'><h1>{text}</h1></div>
            </div>
            <div className='anim1 inline-block'>
                <div className='mr-[10vw] md:mr-[6vw] inline-block'><h1>{text}</h1></div>
                <div className='mr-[10vw] md:mr-[6vw] inline-block'><h1>{text}</h1></div>
                <div className='mr-[10vw] md:mr-[6vw] inline-block'><h1>{text}</h1></div>
            </div>
            <div className='anim1 inline-block'>
                <div className='mr-[10vw] md:mr-[6vw] inline-block'><h1>{text}</h1></div>
                <div className='mr-[10vw] md:mr-[6vw] inline-block'><h1>{text}</h1></div>
                <div className='mr-[10vw] md:mr-[6vw] inline-block'><h1>{text}</h1></div>
            </div>
        </div>
  )
}

export default Index