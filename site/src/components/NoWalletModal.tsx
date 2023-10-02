import React from 'react'

export default function NoWalletModal() {
    const themeConfig = "dark"
  return (
    <div className={`w-[280px] h-[406px] border ${themeConfig === "dark" ? "border-gray-600/30 bg-gray-900  text-gray-300" : "bg-white/90 border-gray-600/30"}  rounded-xl p-4  animate-slideAndFade`}>
    {/*} Start component  header */}

       <div className="flex justify-between items-center "> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 cursor-pointer ${themeConfig === "dark" ? "text-gray-200/100" :  "text-gray-700"} `} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>


  <h1 className="font-semibold text-lg"> Get a Wallet </h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 cursor-pointer ${themeConfig === "dark" ? "text-gray-200/100" :  "text-gray-700"} `} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

   </div>
        {/* End component  header */}

     {/*Start component  body */}

     <div className="mt-5">
          <div className={`border ${themeConfig === "dark" ? "border-gray-700/50" : "border-gray-300/70"}  rounded-lg py-2 flex items-center justify-center`}>
              <img    src="https://i.ibb.co/1XgG0fc/Untitled-design-13.png"
              className="animate-shakeAndMove infinityAnimation"  />
          </div>


  <div className="mt-6">
    <h1 className="font-bold text-lg text-center my-2"> Start Exploring Web3 </h1>

    <p className="text-center font-light "> Your wallet is the gateway to all things Polkadot, the magical technology that makes it possible to explore web3</p>

     <div className={`my-3 flex gap-3 items-center justify-center border ${themeConfig === "dark" ? "border-gray-700/60" : "border-gray-300/70"}  py-2 px-3 rounded-lg cursor-pointer hover:animate-scaleSlow`} >
        <p className="capitalize font-semibold text-sm"> Choose Your First Wallet</p>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

     </div>
  </div>
     </div>
  </div>
  )
}
