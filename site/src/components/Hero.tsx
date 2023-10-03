import React from 'react'
import ConnectDarkModal from './ConnectDarkModal'
import ConnectLightModal from './ConnectLightModal'
import { TypeAnimation } from 'react-type-animation'
import { publicSans } from '@/utils/fonts'

export default function Hero() {
  const handleOpenExternalLink = (linkUrl : string) => {
    window.open(linkUrl, '_blank');
   }
  
  return (
    <div className='flex items-center justify-between w-full'>
    <div className='sm:w-full sm:min-h-screen   md:w-[46%] md:min-h-screen  lg:min-h-[90vh]  flex items-center justify-center'>
      <div className={`flex flex-col gap-3 items-center justify-center`}>
       <h1 className={`tracking-wide  ${publicSans.className} text-5xl font-bold text-center`}>Cutting-Edge Wallet Connectivity for <span className='text-[#c82679]'>Polkadot</span>  eco </h1>
        <p className='text-center text-xl'>For Builders and Users Alike.</p>
        <div className='flex gap-3 mt-4'>
         <button className='bg-blue-500 rounded-lg text-lg font-semibold focus:ring-1 ring-blue-400 py-1.5 px-4' onClick={() => handleOpenExternalLink("https://github.com/abdul-kabugu/polconnect")}>View the Docs</button>
         <button className='bg-blue-500 rounded-lg text-lg font-semibold focus:ring-1 ring-blue-400 py-1.5 px-4' onClick={() => handleOpenExternalLink("https://tippig-example.vercel.app/")}>View the Demo</button>

         </div>
      </div>
    </div>
    
    <div className='w-[50%] xs:hidden md:flex md:max-h-screen lg:min-h-[90vh]   gap-2  items-center justify-center'>
   <div className='relative flex  py-2 px-4 animate-cardsContainerAnimation infinityAnimation '>
      <div className='animate-xcardAnimation infinityAnimation'>
        <ConnectDarkModal   />
      </div>
      <div className='absolute left-[30%]'>
        <ConnectLightModal  />
      </div>
   </div>
   </div>
  
    </div>
  )
}
