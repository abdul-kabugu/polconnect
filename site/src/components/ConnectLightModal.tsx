import React from 'react'
import { allDefaultWallets } from '../../walletsConfig'

export default function ConnectLightModal() {
 const  themeConfig = 'light'
  return (
    <div className={`w-[310px] animate-fromDownFade duration-500 h-[420px] border text-gray-700  border-gray-200 bg-white/90 rounded-xl p-3`}>
    {/*Start component  header */}

      <div className="flex justify-between items-center "> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 cursor-pointer  text-gray-700 `} >
 <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>

 <h1 className='font-semibold text-lg'> Connect Wallet </h1>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 cursor-pointer text-gray-700 `} >
 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

  </div>
       {/*End component  header */}

    {/*Start component  body */}
     
    <div className="mt-5">

    {allDefaultWallets?.map((wallet, i) => (
       <div key={i} className={`flex justify-between border  border-gray-300/80 py-1.5 px-3 rounded-md cursor-pointer hover:animate-scaleSlow hover:border-gray-400 my-5`} >
       <h2 className="capitalize font-medium "> {wallet.name}</h2>
        <img  src={wallet?.logoUrls[0]} className="w-7 h-7 rounded-full"   />
       </div>
       ))}
       
       <div className={`flex gap-2 items-center justify-center text-gray-500 hover:text-gray-800 cursor-pointer  text-sm`} > 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3.5 h-3.5 ">
 <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
</svg>

<p> I dont have a wallet </p>
        </div>
    </div>
 </div>
  )
}
