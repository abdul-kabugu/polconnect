import React from 'react'
import {Parallax, ParallaxProvider, useParallax} from 'react-scroll-parallax'
import SlidingElements from './SlideElements';
import { publicSans } from '@/utils/fonts';
export default function OnboardingSteps() {

  const parallax = useParallax<HTMLDivElement>({
    speed : -10,
    easing: 'easeInOut',
    translateY: [-10, 50],
  });
  return (
  <div className='xs:hidden md:flex flex-col '>
  
      <div className='' ref={parallax.ref}>
        <h1 className={`${publicSans.className} text-3xl font-semibold my-6 text-center`}> Seamless Onboarding Experience</h1>
         <SlidingElements  />
        </div>
      
      <Parallax speed={5}>
        <h2>This is my heading</h2>
      </Parallax>
  </div>
  )
}
