import React from 'react'
import ConnectDarkModal from './ConnectDarkModal'
import ConnectLightModal from './ConnectLightModal'
import { TypeAnimation } from 'react-type-animation'
import { publicSans } from '@/utils/fonts'

export default function Hero() {
  return (
    <div className='flex items-center justify-between w-full'>
    <div className='w-[40%] h-screen border border-green-500 flex items-center justify-center'>
      <div className={`flex gap-2 ${publicSans.className} text-4xl font-semibold`}>
       <h1>Cutting-Edge Wallet Connectivity for Polkadot eco </h1>
      {/* <TypeAnimation
        sequence={[
          'Polkadot',
          1000,
          "Kusama",
          1000,
          "All parachains",
          1000
        ]}
        wrapper='span'
         speed={10}
        className=''
        repeat={Infinity}
      />*/}
        
          </div>
    </div>
    {/*
    <div className='w-[60vw] h-screen border border-red-500 flex gap-2'>
    <ConnectDarkModal   />
    <ConnectLightModal  />
     

    </div>
  */}
    </div>
  )
}
