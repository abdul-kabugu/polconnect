import React from 'react'
import {ConnectButton} from 'polconnect'
export default function TopNav() {
  return (
    <div className='flex justify-between bg-black/80 sticky top-0  items-center px-3 py-2 h-[60px] max-w-screen-xl mx-auto'>
      <h1 className='font-semibold'>PolconnectKit</h1>
      <ConnectButton  label='Connect Wallet' backGround='blue' showChain={true} />
    </div>
  )
}
