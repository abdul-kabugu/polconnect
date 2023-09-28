import React from 'react'
import {Parallax, ParallaxProvider} from 'react-scroll-parallax'
export default function OnboardingSteps() {
  return (
  <div className='h-screen bg-red-500'>
    <div className='text-6xl h-screen'>This is  the first  step with images</div>
    <Parallax translateY={[-30, 30]} speed={1}>
    <div className='text-6xl'>This is  the second  step with images</div>

    </Parallax>
  </div>
  )
}
