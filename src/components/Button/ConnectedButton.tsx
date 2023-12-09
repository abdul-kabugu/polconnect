
import { bool } from '@polkadot/types'
import React from 'react'
import { usePolkit } from '../../providers/Provider'
import Identicon from '@polkadot/react-identicon'
import { truncateText } from '../../helpers/truncateText'
type ConnectedBtnProps = {
    showChain? : boolean | undefined
    balance? : any
    userAddress? :string

}
export default function ConnectedButton({showChain, balance, userAddress} :ConnectedBtnProps) {
    const {themeConfig, activeChain, activeAccount, handleDisconnectModal, handleSwitchChains} = usePolkit()

     const renderByLibraryTheme = () =>  {
        if(themeConfig.appearence.mode === "light"){
            return(
                <div className="inline-flex gap-3  py-1 px-1 rounded-lg shadow-md">
                <div className={` ${showChain ? "flex" : "hidden"} border border-gray-300/80 shadow-sm rounded-lg py-1 px-3 flex items-end justify-end gap-2 cursor-pointer hover:animate-scaleSlow duration-500 `} onClick={handleSwitchChains}>   
                <img   src={activeChain?.logo}  className='w-6 h-6 rounded-full' />
             <div className="flex items-center justify-center gap-1 ">
              <p className="capitalize font-medium font-primary-font  text-black"> {activeChain?.name} </p>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 font-semibold ">
             <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
           </svg>
             </div> 
                
             
             </div>
           
             <div className="flex gap-2 items-center ">
               <p className="font-semibold uppercase text-gray-700 font-mono hover:text-black">{balance} </p>
              <div className="border border-gray-300/80  rounded-lg py-1 px-3 flex items-end justify-end gap-2 cursor-pointer hover:animate-scaleSlow duration-500 " onClick={handleDisconnectModal}>   
              {/*address avatar icon */}
              <Identicon
                  size={22}
                  value={userAddress}
                  theme='beachball'
                  />
             <div className="flex items-center justify-center gap-1 ">
              <p className="capitalize font-medium font-sans  text-gray-600 hover:text-black">{userAddress && truncateText(userAddress, 8)}</p>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 font-semibold ">
             <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
           </svg>
             </div>
             </div>
                </div>
                </div>
            )
        } else if(themeConfig.appearence.mode  === "dark"){
            return(
                <div className="inline-flex gap-3 border border-gray-700/70 py-1 px-1 rounded-lg shadow-md">
                <div className={` ${showChain ? "flex" : "hidden"} border border-gray-700/60 rounded-lg py-1 px-3 flex items-end justify-end gap-2 cursor-pointer hover:animate-scaleSlow duration-500 `} onClick={handleSwitchChains}>   
                <img   src={activeChain?.logo}  className='w-5 h-5 rounded-full' />
             <div className="flex items-center justify-center gap-1 ">
              <p className="capitalize font-medium font-sans  text-gray-200 hover:text-white">{activeChain?.name} </p>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 font-semibold text-white">
             <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
           </svg>
             </div>
             </div>
           
             <div className="flex gap-2 items-center ">
               <p className="font-semibold uppercase text-gray-400 font-mono hover:text-white/75">{balance}</p>
              <div className="border border-gray-800  rounded-lg py-1 px-3 flex items-end justify-end gap-2 cursor-pointer hover:animate-scaleSlow duration-500 " onClick={handleDisconnectModal}>   
                {/*address avatar icon */}
                <Identicon
                  size={22}
                  value={userAddress}
                  theme='polkadot'
                  />
             <div className="flex items-center justify-center gap-1 ">
              <p className="capitalize font-medium font-sans  text-gray-300 hover:text-white">{userAddress && truncateText(userAddress, 8)}</p>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 font-semibold text-white">
             <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
           </svg>
             </div>
             </div>
                </div>
                </div>
            )
        }
     }
  return (
    <>
    {renderByLibraryTheme()}
    </>
  )
}