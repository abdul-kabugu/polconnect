import React from 'react'
import { usePolkit } from '../../providers/Provider';
import WideModal from './WideModal';
import CompactModal from './CompactModal';
export default function ConnectModal() {
const {
  handleConnectModal, themeConfig, isConnected
  
} = usePolkit()
   // HANDLE_OVERLAY_CLICK
   const handleOverlayClick = (event : any) => {
    if (event.target === event.currentTarget) {
      // @ts-ignore
       handleConnectModal()
    }
  };

  return (
    <div className={`bg-black/70  h-screen w-full fixed top-0 left-0 flex items-center justify-center ${isConnected && "hidden"}`} onClick={handleOverlayClick}>

        {themeConfig.size === "wide"  ? (
          <WideModal   />
        ) : (
          <CompactModal  />
        )}
      </div>
  )
}
