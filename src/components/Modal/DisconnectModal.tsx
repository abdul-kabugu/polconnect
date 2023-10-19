import React from 'react'
import { usePolkit } from '../../providers/Provider';
import Identicon from '@polkadot/react-identicon';
import { truncateText } from '../../helpers/truncateText';
import { CopyToClipboardButton } from '../../helpers/copyText';

type disconnectModalProps = {
    userAddress? : string
     balance? : any

  }
export default function DisconnectModal({userAddress, balance} : disconnectModalProps) {
    const {themeConfig, disconnect, handleDisconnectModal, handleConnectModal} = usePolkit()
      // handle  modal at overly 
      const handleOverlayClick = (event : any) => {
        if (event.target === event.currentTarget) {
          // @ts-ignore
           handleDisconnectModal()
            // @ts-ignore
           handleConnectModal()
        }
      };

      //handle  disconnect  

      const handleDisconnect = () => {
        // @ts-ignore
        disconnect()
        // @ts-ignore
         handleDisconnectModal()
      }
  return (
    <div className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/50  ${themeConfig === "light" ? "shadow-xl" : "shadow-xl"}`} onClick={handleOverlayClick}>
          <div className={`h-[280px] w-[320px] rounded-xl border ${themeConfig === "dark" ? "border-gray-600/30 bg-gray-900 text-gray-300" : "border-gray-600/30 bg-white/90"}  p-4 animate-slideAndFade z-20`}>
         {/*} Start component  header */}

        <div className="flex items-center justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 cursor-pointer " onClick={handleDisconnectModal}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        {/*} End component  header */}

        {/*} Start component  body */}

        <div className="mt-1">
          <div className="flex flex-col gap-3 items-center justify-center rounded-lg py-1">
          <Identicon value={userAddress} size={80} theme='polkadot' />
            <div className="flex items-center justify-center flex-col"> 
              <h1 className="font-semibold text-lg"> {truncateText(userAddress, 8)}</h1>
               <p className=" font-medium"> {balance} </p>
            </div>
          </div>

          <div className="mt-4 flex justify-between px-2">
            <div className={`inline-flex cursor-pointer flex-col items-center justify-center rounded-lg border ${themeConfig === "dark" ? "border-gray-600" : "border-gray-400"}  px-4 py-1 hover:animate-scaleSlow`} onClick={() => CopyToClipboardButton(userAddress)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
              </svg>
              <p className="text-sm">Copy Address</p>
            </div>
            <div className={`inline-flex cursor-pointer flex-col items-center justify-center rounded-lg border ${themeConfig === "dark" ? "border-gray-600" : "border-gray-400"} px-4 py-1 hover:animate-scaleSlow`} onClick={handleDisconnect}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>

              <p className="text-sm">Disconnet</p>
            </div>
          </div>
        </div>
      </div>
 </div>
  )
}
