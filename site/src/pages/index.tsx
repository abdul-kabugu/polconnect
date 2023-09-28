import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import TopNav from '@/components/TopNav'
import OnboardingSteps from '@/components/OnboardingSteps'
import {Parallax, useParallax} from 'react-scroll-parallax'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <main
      className={` min-h-screen  ${inter.className}`}
    >
       <TopNav      />
       <div className='max-w-screen-xl mx-auto -z-10 '  >
       
     <Hero  />
     <OnboardingSteps  />
    
     </div>
    </main>
  )
}
