//@ts-nocheck
import React, {useState} from 'react'
import { allDefaultWallets, isWalletInstalled } from '../../wallets'
import { usePolkit } from '../../providers/Provider'
import WelcomeState from '../connectStates/WelcomeState'
import ConnectingState from '../connectStates/ConnectingWalletState'
import ConnectingWalletState from '../connectStates/ConnectingWalletState'
import InstallWalletState from '../connectStates/InstallWalletState'
import AboutWalletState from '../connectStates/AboutWalletState'
export default function WideModal() {
  const [modalState, setmodalState] = useState('welcome')
  const [selectedWallet, setselectedWallet] = useState()
const  {themeConfig, handleConnectModal, connect, activeChain, defaultChain } = usePolkit()

  const handleConnectWallet  = (chain : any, wallet : any) => {
     setmodalState("connecting")
     setselectedWallet(wallet)
     //@ts-ignore
     connect(chain, wallet)

  }
  return (
    <div className={`w-[700px] h-[460px] border  rounded-2xl p-5 ${themeConfig?.appearence?.mode === "light" ? "bg-white border-gray-300" : "bg-black text-white border-gray-600"}  `}>
      
        <div className='flex gap-2 h-[95%]'>
       <div className={`w-[370px] border-r ${themeConfig?.appearence?.mode === "light" ? "border-gray-300" : "border-gray-800"}   overflow-y-hidden overflow-x-hidden`}>
       <div className='flex items-center gap-2  mb-4'>
             <img   src={themeConfig?.appearence?.ModalTitleIcon || "https://pbs.twimg.com/profile_images/1675780528992141312/AIth_3GW_400x400.jpg"} 
               className='w-6 h-6 rounded-full'
             />
            <h1 className='text-lg font-semibold  capitalize font-primary-font'>  {themeConfig?.appearence?.modalTitle || "connect"}  </h1>

           </div>

          {allDefaultWallets.map((wallet, i) =>  (
              <div className={`flex gap-2 mb-4 cursor-pointer hover:animate-scaleSlow`} key={i} onClick={() => handleConnectWallet( activeChain || defaultChain, wallet)}>  
              <img  src={`${wallet.logoUrls[0]}`} 
                  className='w-11 h-11 rounded-md'
                  />
                  <div>
                <h1 className='font-primary-font text-sm font-semibold'>{wallet.name}</h1>
                <p className='text-xs font-primary-font font-light'>{isWalletInstalled(wallet) ? "installed" : "not intalled"}</p>
                </div>
                
             </div>
          ))} 

         
       </div>

         <div  className=' w-full'>
          <div className='font-primary-font'>
             {
              modalState === "welcome"?  (
                 <div className='flex justify-end items-center mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={handleConnectModal}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
  </div>   ): (
                <div className='flex mb-4 justify-between'> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={() => setmodalState("welcome")}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

  <h2 className='font-semibold'>{selectedWallet?.name}</h2>

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={handleConnectModal}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
               </div>
              )
             }
        </div>
        
         
      
          <div>
     
 <div className='  w-full h-full flex items-center justify-center'>
        
              {
                modalState === "welcome" ?  <WelcomeState   /> :
                modalState === "connecting" && selectedWallet && isWalletInstalled(selectedWallet) ? <ConnectingWalletState wallet ={selectedWallet} />:
                selectedWallet && ! isWalletInstalled(selectedWallet) ? <InstallWalletState selectedWallet={selectedWallet} /> :
                modalState === "about" && <AboutWalletState  />
                 
              }
         </div>
       </div>
       </div>
    </div>
 <div className='flex gap-2 cursor-pointer items-center mt-auto ' onClick={() => setmodalState("about")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>

          <p className='font-semibold font-primary-font'>About wallet</p>
            </div>
    </div>
  )
}
