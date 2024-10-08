import React from 'react'
import logo from '../assets/cuberto-logo-vector.png'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NavBar = () => {
  const tl = useRef(gsap.timeline({ paused: true }));
  const line1 = useRef()
  const line2 = useRef()
  const [isPlay, setIsPlay] = useState(false)

  useGSAP(() => {
    tl.current.to(line1.current, {
      rotate: 45,
      duration: .5,
      position: 'absolute',
    }, 'a')
    .to(line2.current, {
      rotate: -45,
      duration: .5,
      position: 'absolute',

    }, 'a')
    .to('.sideMenu', {
      right: 0
    })
    .from('.socialOption', {
      x: 100,
      opacity: 0,
      stagger: .05
    }, 'b')
    .from('.socialOption2', {
      x: 100,
      opacity: 0,
      stagger: .05
    }, 'b')
  })


  const handleClick = () => {
    if(!isPlay){
      tl.current.play();
    }else{
      tl.current.reverse()
    }
    setIsPlay(!isPlay);
  }
  useEffect(() => {
    const main = document.querySelector('.main');
    const menuClick = document.querySelectorAll('.menuClick');
    const handleRemove = () => {
      if (isPlay) {
        tl.current.reverse();
        setIsPlay(false);
      }
    };
    main.addEventListener('click', handleRemove);

    menuClick.forEach((elem, index) => {
      elem.addEventListener('click', handleRemove)
    })

    return () => {
      main.removeEventListener('click', handleRemove);
      menuClick.forEach((elem) => {
        elem.removeEventListener('click', handleRemove)
      })
    };
  }, [isPlay]);


  return (
    <nav className='w-full absolute z-40 flex items-center justify-between px-[45px] py-[15px]'>
      <img src={logo} className='w-[120px]' alt="Logo" />
      <div className='flex  gap-10'>
        <h1 onClick={handleClick} className='cursor-pointer text-[24px] hidden md:block mr-[110px]'>menu</h1>
        <div onClick={handleClick} className='menu w-[32px] z-50 fixed rounded-full flex flex-col gap-[6px] right-[80px] top-[45px] items-center justify-center'>
          <div ref={line1} className='line1 w-[30px] h-[2px] bg-black '></div>
          <div ref={line2} className='line2 w-[30px] h-[2px] bg-black '></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
