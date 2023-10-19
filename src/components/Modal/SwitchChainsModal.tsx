import React from 'react'
import { usePolkit } from '../../providers/Provider'
import { allDefaultChains } from '../../chains';
export default function SwitchChainsModal() {
    const {themeConfig, handleSwitchChains, switchActiveChain} = usePolkit()

        // handle  modal at overly 
        const handleOverlayClick = (event : any) => {
            if (event.target === event.currentTarget) {
              // @ts-ignore
               handleSwitchChains()
            }
          };
    
  return (
    <div className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/50  ${themeConfig === "light" ? "shadow-xl" : "shadow-xl"}`} onClick={handleOverlayClick}>
    <div className={`h-[370px] animate-slideAndFade w-[300px] rounded-xl border ${themeConfig === "dark" ? "border-gray-600/30 bg-gray-900 text-gray-300" : "border-gray-600/30 bg-white/90"} p-4 overflow-y-scroll scrollbar-hidden z-20`}>
        

        <div className={`flex items-center justify-between sticky top-0 bg-inherit`}>
           <h1 className="text-lg font-semibold"> Switch Networks </h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 cursor-pointer " onClick={handleSwitchChains}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
       
        <div className="mt-5">
            {allDefaultChains?.map((chain, i) => {
              
                return(
                  <>
                  {/*@ts-ignore  */}
                    <div className={`flex gap-3 border ${themeConfig === "dark" ? "border-gray-700/60 hover:border-gray-700/80" : "border-gray-300/70 hover:border-gray-300"} py-1.5 px-3 rounded-md cursor-pointer text-lg hover:animate-scaleSlow my-3`} onClick={() =>switchActiveChain(chain)}> 
                    <img src={chain?.logo} className="h-7 w-7 rounded-full" />
                    <h3 className="font-medium ">{chain?.name} </h3>
                           </div>
                           </>
                )
            })}
        
            
              
            
             
      </div>
    </div>
    </div>

  )
}
