import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import TopNav from '@/components/TopNav'
import OnboardingSteps from '@/components/OnboardingSteps'
import {Parallax, useParallax} from 'react-scroll-parallax'
import SlidingElements from '@/components/SlideElements'
import Head from 'next/head'
import ogImgUrl from '../../public/img/screenshot.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  
  return (
    <>
     <Head>
        <title>Polconnect Kit</title>
        <meta name="description" content="PolconnectKit - Your Seamless Polkadot Wallet Connector 👩🏻‍💻" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       {/* @ts-ignore       */}
<meta property="og:image" content={ogImgUrl} key="ogimage" />

      </Head>
    <main
      className={` min-h-screen  ${inter.className}`}
    >
       <TopNav      />
       <div className='max-w-screen-xl mx-auto -z-10 '  >
     <Hero  />
     <OnboardingSteps  />

     </div>
    </main>
    </>
  )
}
