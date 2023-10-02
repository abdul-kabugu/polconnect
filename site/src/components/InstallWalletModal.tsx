import React from 'react'

export default function InstallWalletModal() {
  const themeConfig = "dark"
  return (
    <div className={`w-[320px] animate-slideAndFade h-[370px] ${themeConfig === "dark" ? "bg-gray-900 border-gray-300/30 text-gray-300" : "border-gray-600/30  bg-white/90"} border  rounded-xl p-4 `}>
    {/*} Start component  header */}

       <div className="flex justify-between items-center "> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6  cursor-pointer" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>


  <h1 className="font-semibold text-lg"> Install Sub Wallet </h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer " >
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

   </div>
       {/*} End component  header */}

     {/*} Start component  body */}

     <div className="mt-5">
          <div className=" rounded-lg py-2 flex items-center justify-center">
              <img    src={`https://github.com/scio-labs/use-inkathon/raw/main/assets/wallet-logos/subwallet@128w.png`}
              className=" w-[110px] h-[110px] rounded-full"  />
          </div>


  <div className="mt-6">
    <h1 className="font-bold text-lg text-center my-2"> Install SubWallet </h1>

    <p className={`text-center ${themeConfig === "dark" && "text-gray-400"} `}>To connect your Sub Wallet,
install the browser extension.</p>
    {/*   @ts-ignore   */}
     <div className={`my-3 flex gap-3 items-center justify-center border ${themeConfig === "dark" ? "border-gray-700/50" : "border-gray-300"}  py-2 px-3 rounded-lg cursor-pointer hover:animate-scaleSlow`} >
       <img  src="https://i.ibb.co/f45X23g/Google-Chrome-icon-2011.png" 
         className="w-5 h-5"
        />
        <p className="capitalize font-semibold"> Install The Extension </p>
        

     </div>
  </div>
     </div>
  </div>
  )
}
