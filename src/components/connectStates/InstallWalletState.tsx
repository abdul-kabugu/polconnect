import React from 'react'
import { usePolkit } from '../../providers/Provider';
export default function InstallWalletState({selectedWallet}: any) {
  const {themeConfig} = usePolkit()
  const handleOpenExternalLink = (linkUrl : string) => {
    window.open(linkUrl, '_blank');
   }
  return (
    <div className="mt-5">
    <div className=" rounded-lg py-2 flex items-center justify-center">
        <img    src={selectedWallet?.logoUrls[0]}
        className=" w-[110px] h-[110px] rounded-full"  />
    </div>


<div className="mt-6">
<h1 className="font-bold text-lg text-center my-2"> Install {selectedWallet?.name} </h1>

<p className={`text-center `}>To connect your {selectedWallet?.name}, <br />
install the browser extension.</p>
{/*   @ts-ignore   */}
<div className={`my-3 flex gap-3 items-center justify-center border ${themeConfig?.appearence?.mode === "light" ? "border-gray-300" : "border-gray-700"}  py-2 px-3 rounded-lg cursor-pointer hover:animate-scaleSlow ms-auto`} onClick={() => handleOpenExternalLink(selectedWallet?.urls?.website)}>
 <img  src="https://i.ibb.co/f45X23g/Google-Chrome-icon-2011.png" 
   className="w-5 h-5"
  />
  <p className="capitalize font-semibold"> Install The Extension </p>
  

</div>
</div>
</div>
  )
}
