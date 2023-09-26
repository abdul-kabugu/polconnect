import { SubstrateChain } from "../chains";
import { SubstrateWallet } from "../wallets";
import { InjectedAccount, InjectedExtension, Unsubcall } from '@polkadot/extension-inject/types'
import { Signer } from '@polkadot/types/types'
import { ApiPromise, HttpProvider, WsProvider } from '@polkadot/api'

export interface providerProps  {
   themeConfig: "light" | "dark",
   defaultChain: SubstrateChain | SubstrateChain["network"],
   isSwitchChains : boolean, 
   handleSwitchChains : () => void;
   isDisconnectModal? : boolean,
   isConnectModal? : boolean,
   handleConnectModal? : () => void ,
   handleDisconnectModal? : () => void,
   connect? : (
      chain?: SubstrateChain,
      wallet?: SubstrateWallet,
      lastActiveAccountAddress?: string,
     ) => Promise<void>,
   accounts?:  InjectedAccount[],
   isConnecting? : boolean,
   isInitializing? : boolean,
   isInitialized ? : boolean,
   activeAccount? : InjectedAccount ,
   activeChain ? : SubstrateChain,
   activeExtension : InjectedExtension | undefined,
   activeSigner ? : Signer,
   lastActiveAccount? : InjectedAccount,
   disconnect?: () => void
   setActiveAccount?: InjectedAccount | undefined
   api? : ApiPromise
   isConnected? : boolean
   switchActiveChain? : (chain?: any) => void
}