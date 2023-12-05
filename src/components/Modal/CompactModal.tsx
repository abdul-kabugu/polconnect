import React, {useState} from 'react'
import { usePolkit } from '../../providers/Provider'
import { allSubstrateWallets,allDefaultWallets, isWalletInstalled, SubstrateWallet } from '../../wallets'
import { astar, alephzero, rococo, SubstrateChain } from '../../chains'

type connectModalProps = {
  chain? : SubstrateChain
}

export default function CompactModal({chain} : connectModalProps) {
  
 const {themeConfig,
       handleConnectModal,
        connect,
         activeExtension,
         isConnecting,
         activeAccount,
         isConnected,
         activeChain,
         
         
        }
         = usePolkit()
   const [modalState, setmodalState] = useState('connect')
   const [isWalletAvailable, setisWalletAvailable] = useState(false)
 const [selectedWallet, setselectedWallet] = useState<SubstrateWallet>()
 
 
   /*-----------------------------
   handle connect wallet
---------------------------------------
      */
const walletConnector = (chain: any, wallet : any) =>  {
  setselectedWallet(wallet)
  //@ts-ignore
   connect(chain, wallet)
   setmodalState("isConnecting")
}



 const handleOpenExternalLink = (linkUrl : string) => {
  window.open(linkUrl, '_blank');
 }

     const showAboutWallet = () => {
        setmodalState("aboutWallet")
     }

     const showConnectWallet = () => {
      setmodalState("connect")
     }

      const showNoWallet = () => {
        setmodalState("no-wallet")
      }

      const showInstallWallet =() => {
        setmodalState("install-wallet")
      }

       const showIsConnecting = () => {
        setmodalState("isConnecting")
       }

        // handle  modal at overly 
        const handleOverlayClick = (event : any) => {
          if (event.target === event.currentTarget) {
            // @ts-ignore
             handleConnectModal()
          }
        };
    

   const getConnectState = () => {
    if(modalState === "connect"){

    
     return(
   
  <div className={`w-[310px] animate-fromDownFade duration-500 min-h-[420px] border   ${themeConfig.appearence.mode === "dark" ? "border-gray-700/70 bg-black text-gray-300/75"  : "border-black/30 bg-white/90"} rounded-xl p-3 z-20`}>
     {/*Start component  header */}

       <div className="flex justify-between items-center "> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 cursor-pointer ${themeConfig.appearence.mode === "dark" ? "text-gray-200/100" : "text-gray-700"} `} onClick={showAboutWallet}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>

  <h1 className='font-semibold text-lg'> Connect Wallet </h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 cursor-pointer ${themeConfig.appearence.mode === "dark" ? "text-gray-200/100" :  "text-gray-700"} `} onClick={handleConnectModal}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

   </div>
        {/*End component  header */}

     {/*Start component  body */}
      
     <div className="mt-5">

     {allDefaultWallets?.map((wallet, i) => (
        <div key={i} className={`flex justify-between border ${themeConfig.appearence.mode === "dark" && "border-gray-700/70 hover:border-gray-700/60"} border-gray-300/80 py-1.5 px-3 rounded-md cursor-pointer hover:animate-scaleSlow hover:border-gray-400 my-5`} onClick={() => walletConnector(chain || activeChain, wallet)}>
        <h2 className="capitalize font-medium "> {wallet.name}</h2>
         <img  src={wallet?.logoUrls[0]} className="w-7 h-7 rounded-full"   />
        </div>
        ))}
        
        <div className={`flex gap-2 items-center justify-center ${themeConfig.appearence.mode === "dark" ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-800"} cursor-pointer  text-sm`} onClick={showNoWallet}> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3.5 h-3.5 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
</svg>

 <p> I dont have a wallet </p>
         </div>
     </div>
  </div>
  
    
     )
   } else if(modalState === "aboutWallet"){
    return(

      <div className={`w-[280px] h-[425px] border ${themeConfig.appearence.mode === "dark" ? "border-gray-600/30 bg-gray-900  text-gray-300" : "bg-white/90 border-gray-600/30"}  rounded-xl p-4  animate-slideAndFade z-20`}>
        {/*} Start component  header */}
    
           <div className="flex justify-between items-center "> 
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 cursor-pointer ${themeConfig.appearence.mode === "dark" ? "text-gray-200/100" :  "text-gray-700"} `} onClick={showConnectWallet}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
    
    
      <h1 className="font-semibold text-lg"> About Wallets </h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 cursor-pointer ${themeConfig.appearence.mode === "dark" ? "text-gray-200/100" :  "text-gray-700"} `} onClick={handleConnectModal}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    
       </div>
            {/* End component  header */}
    
         {/*Start component  body */}
    
         <div className="mt-5">
              <div className={`border ${themeConfig.appearence.mode === "dark" ? "border-gray-700/50" : "border-gray-300/70"}  rounded-lg py-2 flex items-center justify-center`}>
                  <img    src="https://i.ibb.co/1XgG0fc/Untitled-design-13.png"
                  className="animate-shakeAndMove infinityAnimation"  />
              </div>
    
    
      <div className="mt-6">
        <h1 className="font-bold text-lg text-center my-2 font-primary-font"> For your digital assets </h1>
    
        <p className="text-center font-light text-sm "> These wallets empower you to transmit, accept, safeguard, and engage with digital assets, such as NFTs and various Polkadot and Kusama tokens.</p>
    
         <div className={`my-3 flex gap-3 items-center justify-center border ${themeConfig.appearence.mode === "dark" ? "border-gray-700/60" : "border-gray-300/70"}  py-2 px-3 rounded-lg cursor-pointer hover:animate-scaleSlow`} onClick={() => handleOpenExternalLink("https://wiki.polkadot.network/docs/wallets-and-extensions")}>
            <p className="capitalize font-semibold text-sm"> learn more </p>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
    
         </div>
      </div>
         </div>
      </div>
    
     
    )
   } else if(modalState === "no-wallet"){

    return(

      <div className={`w-[280px] h-[406px] border ${themeConfig.appearence.mode === "dark" ? "border-gray-600/30 bg-gray-900  text-gray-300" : "bg-white/90 border-gray-600/30"}  rounded-xl p-4  animate-slideAndFade z-20`}>
        {/*} Start component  header */}
    
           <div className="flex justify-between items-center "> 
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 cursor-pointer ${themeConfig.appearence.mode === "dark" ? "text-gray-200/100" :  "text-gray-700"} `} onClick={showConnectWallet}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
    
    
      <h1 className="font-semibold text-lg"> Get a Wallet </h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 cursor-pointer ${themeConfig.appearence.mode === "dark" ? "text-gray-200/100" :  "text-gray-700"} `} onClick={handleConnectModal}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    
       </div>
            {/* End component  header */}
    
         {/*Start component  body */}
    
         <div className="mt-5">
              <div className={`border ${themeConfig.appearence.mode === "dark" ? "border-gray-700/50" : "border-gray-300/70"}  rounded-lg py-2 flex items-center justify-center`}>
                  <img    src="https://i.ibb.co/1XgG0fc/Untitled-design-13.png"
                  className="animate-shakeAndMove infinityAnimation"  />
              </div>
    
    
      <div className="mt-6">
        <h1 className="font-bold text-lg text-center my-2"> Start Exploring Web3 </h1>
    
        <p className="text-center font-light "> Your wallet is the gateway to all things Polkadot, the magical technology that makes it possible to explore web3</p>
    
         <div className={`my-3 flex gap-3 items-center justify-center border ${themeConfig.appearence.mode === "dark" ? "border-gray-700/60" : "border-gray-300/70"}  py-2 px-3 rounded-lg cursor-pointer hover:animate-scaleSlow`} onClick={() => handleOpenExternalLink("https://wiki.polkadot.network/docs/wallets-and-extensions")}>
            <p className="capitalize font-semibold text-sm"> Choose Your First Wallet</p>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
    
         </div>
      </div>
         </div>
      </div>
      
    )
      // @ts-ignore
   } else if(modalState === "isConnecting" && ! isWalletInstalled(selectedWallet)){
    return(
<div className={`w-[320px] animate-slideAndFade h-[370px] ${themeConfig.appearence.mode === "dark" ? "bg-gray-900 border-gray-300/30 text-gray-300" : "border-gray-600/30  bg-white/90"} border  rounded-xl p-4 z-20`}>
    {/*} Start component  header */}

       <div className="flex justify-between items-center "> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6  cursor-pointer" onClick={showConnectWallet}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>


  <h1 className="font-semibold text-lg"> Install {selectedWallet?.name} </h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer " onClick={handleConnectModal}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

   </div>
       {/*} End component  header */}

     {/*} Start component  body */}

     <div className="mt-5">
          <div className=" rounded-lg py-2 flex items-center justify-center">
              <img    src={selectedWallet?.logoUrls[0]}
              className=" w-[110px] h-[110px] rounded-full"  />
          </div>


  <div className="mt-6">
    <h1 className="font-bold text-lg text-center my-2"> Install {selectedWallet?.name} </h1>

    <p className={`text-center ${themeConfig.appearence.mode === "dark" && "text-gray-400"} `}>To connect your {selectedWallet?.name},
install the browser extension.</p>
    {/*   @ts-ignore   */}
     <div className={`my-3 flex gap-3 items-center justify-center border ${themeConfig === "dark" ? "border-gray-700/50" : "border-gray-300"}  py-2 px-3 rounded-lg cursor-pointer hover:animate-scaleSlow`} onClick={() => handleOpenExternalLink(selectedWallet?.urls?.website)}>
       <img  src="https://i.ibb.co/f45X23g/Google-Chrome-icon-2011.png" 
         className="w-5 h-5"
        />
        <p className="capitalize font-semibold"> Install The Extension </p>
        

     </div>
  </div>
     </div>
  </div>
  
    )
    //@ts-ignore 
   }else if(modalState === "isConnecting" && isConnecting && isWalletInstalled(selectedWallet)) {
      return(
<div className={`w-[320px] animate-slideAndFade h-[340px] ${themeConfig.appearence.mode === "dark" ? "bg-gray-900 border-gray-300/30 text-gray-300" : "border-gray-600/30  bg-white/90"} border  rounded-xl p-4 z-20 `}>
    {/*} Start component  header */}

       <div className="flex justify-between items-center "> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6  cursor-pointer" onClick={showConnectWallet}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>


  <h1 className="font-semibold text-lg"> Connecting Wallet </h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer " onClick={handleConnectModal}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

   </div>
       {/*} End component  header */}

     {/*} Start component  body */}

     <div className="mt-5">
          <div className={` rounded-lg py-2 flex items-center justify-center`}>
                <svg aria-hidden="true" className={`w-[110px] h-[110px] mr-2 ${themeConfig.appearence.mode === "dark" ? "text-gray-800" : "text-gray-100 "} animate-spin  fill-pink-600`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
          </div>


  <div className="mt-6">
    <h1 className="font-bold text-lg text-center my-2"> Requesting Connection </h1>

    <p className={`text-center ${themeConfig.appearence.mode === "dark" && "text-gray-400"} `}>Accept the request through your wallet to connect to this app.</p>

   
  </div>
     </div>
  </div>
  
      )
   }
   }
     
  return (
    <>
      {getConnectState()}
    </>
  )
}

