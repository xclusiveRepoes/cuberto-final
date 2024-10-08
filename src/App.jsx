import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import SideMenu from './components/SideMenu'
import Hero from './components/Hero'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import { BrowserRouter } from 'react-router-dom'
import Index from './components/routers/index'
import Page3 from './components/Page3'
import Circle from './components/Circle'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  useGSAP(() => {
    document.querySelector('.holeBody').addEventListener('mousemove', (e) => {
      gsap.to('.circle', {
        top: e.y - 7.5,
        left: e.x - 7.5
      })
    })
  })
  return (
    <div className='holeBody'>
      <BrowserRouter className='overflow-x-hidden'>
        <Circle />
        <NavBar />
        <SideMenu />
        <div className='main'>
          <Index />
          <Hero />
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App