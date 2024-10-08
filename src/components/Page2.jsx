import React from "react";
import video from '../assets/page2Vid.mp4'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
const Page2 = () => {
  useGSAP(() => {
    gsap.from('.page2Vid', {
      scale: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.page2',
        scrub: 4,
        start: 'top 70%',
        end: 'top 10%'
      }
    })
  })
  return (
    <div className="page2 w-full h-screen py-[8vh] px-[20px] flex justify-between items-center">
        <div className="page2Vid hidden lg:flex w-[40%] xl:-[55%] h-full"><video className="w-[75%] ml-[10vw] " autoPlay loop muted src={video}></video></div>
      <div className="w-full lg:w-[45%] flex flex-col items-center xl:pr-[18vw] ">
        <div>
          <p className="text-[6vw] lg:text-[3vw] md:text-[4.5vw] xl:text-[1.81vw] text-start leading-[1.2]">
            Cuberto is a leading digital product agency focused on branding,
            UI/UX design, mobile, and web development.
          </p>
        </div>
        <button className="button2 mt-[5vh] text-[26px] w-[80vw] sm:w-[450px] h-[20vh] rounded-full border-[1px] border-black flex items-center justify-center">
          <div className=" overflow-hidden w-fit h-[31px] leading-[1.1]">
            <div className="btn2txt">
              <h1>What we do</h1>
              <h1>What we do</h1>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Page2;
