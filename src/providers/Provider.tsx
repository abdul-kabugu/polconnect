import React, { createContext, useContext, useState, useEffect} from 'react'
import { providerProps } from './polkitProviderProps.types'
import { ApiPromise, HttpProvider, WsProvider } from '@polkadot/api'
import { ApiOptions } from '@polkadot/api/types'
import { SubstrateChain, getSubstrateChain } from '../chains'
import { Signer } from '@polkadot/types/types'
import { accountArraysAreEqual, accountsAreEqual } from '../helpers/accountsAreEqual'
accountArraysAreEqual
import { InjectedAccount, InjectedExtension, Unsubcall } from '@polkadot/extension-inject/types'
import {
    SubstrateWallet,
    allSubstrateWallets,
    enableWallet,
    getSubstrateWallet,
    isWalletInstalled,
    nightly,
} from '../wallets'
import { initPolkadotJs } from '../helpers/initPolkadot'

/**
 * Helper Types
 */
export enum PolkitErrorCodes {
    InitializationError,
    NoSubstrateExtensionDetected,
    NoAccountInjected,
  }

  export interface PolkitError {
    code: PolkitErrorCodes
    message: string
  }
const PolkitContext = createContext<providerProps | undefined>(undefined)

export const usePolkit = (): providerProps => {
    const context = useContext(PolkitContext)

    if(!context){
        throw new Error ("must be used in providers")
    }
    return context
}

interface polkitProviders {
    children : React.ReactNode,
    theme : providerProps["themeConfig"]
    appName : string
    defaultChain : providerProps["defaultChain"],
    apiOptions?: ApiOptions,
    connectOnInit?: boolean
}

export  const PolkitProvider = ({children, theme, appName, defaultChain, apiOptions, connectOnInit} : polkitProviders) => {
 const [isConnectModal, setisConnectModal] = useState(false)
 const [isDisconnectModal, setisDisconnectModal] = useState(false)
 const [themeConfig, setthemeConfig] = useState(theme)
 const [isSwitchChains, setisSwitchChains] = useState(false)
 const [api, setApi] = useState<ApiPromise>()
 const [provider, setProvider] = useState<WsProvider | HttpProvider>()
 const [accounts, setAccounts] = useState<InjectedAccount[]>([])
 const [activeAccount, setActiveAccount] = useState<InjectedAccount>()
 const [activeExtension, setActiveExtension] = useState<InjectedExtension>()
 const [activeSigner, setActiveSigner] = useState<Signer>()
 const [isInitializing, setIsInitializing] = useState(true)
 const [isInitialized, setIsInitialized] = useState(false)
const [isConnecting, setIsConnecting] = useState<boolean>()
 const [isConnected, setIsConnected] = useState(false)
 const [lastActiveAccount, setLastActiveAccount] = useState<InjectedAccount>()
 const [error, setError] = useState<PolkitError | undefined>()
 const [unsubscribeAccounts, setUnsubscribeAccounts] = useState<Unsubcall>()
 // current active chain
 const [activeChain, setActiveChain] = useState<SubstrateChain>(
    (typeof defaultChain === 'string'
      ? getSubstrateChain(defaultChain)
      : defaultChain) as SubstrateChain,
  )
   
    // Check if default chain was provided
    if (
        !defaultChain ||
        (typeof defaultChain === 'string' && getSubstrateChain(defaultChain) === undefined)
      ) {
        throw new Error(
          'None or invalid `defaultChain` provided with `PolkitProvider`. Forgot to set environment variable?',
        )
      }

        
  // Initialize polkadot-js/api
  const initialize = async (chain?: SubstrateChain) => {
    setIsInitialized(!!api?.isConnected)
    setIsInitializing(true)
    setIsConnected(false)
    setError(undefined)

    try {
      const _chain = chain || activeChain
      const { api, provider } = await initPolkadotJs(_chain, {
        noInitWarn: true,
        throwOnConnect: true,
        ...apiOptions,
      })
      setProvider(provider)
      setApi(api)
      setIsInitialized(true)

      // Update active chain if switching
      if (activeChain.network !== _chain.network) setActiveChain(_chain)
    } catch (e) {
      const message = 'Error while initializing polkadot.js api'
      console.error(message, e)
      setError({ code: PolkitErrorCodes.InitializationError, message })
      setIsConnected(false)
      setIsConnecting(false)
      setIsInitialized(false)
      setApi(undefined)
      setProvider(undefined)
    } finally {
      setIsInitializing(false)
    }
  }

    
  // Updates account list and active account
  const updateAccounts = (
    injectedAccounts: InjectedAccount[],
    lastActiveAccountAddress?: string,
  ) => {
    const newAccounts = injectedAccounts || []
    // Find active account in new accounts or fallback to latest account
    const _lastAccount = lastActiveAccountAddress
      ? { address: lastActiveAccountAddress }
      : lastActiveAccount
    const newAccount =
      newAccounts.find((a) => accountsAreEqual(a, _lastAccount)) || newAccounts?.[0]

    // Update accounts and active account
    if (!accountArraysAreEqual(accounts, newAccounts)) {
      setAccounts(() => newAccounts)
    }
    if (!accountsAreEqual(activeAccount, newAccount)) {
      setActiveAccount(() => newAccount)
    }
    setIsConnected(!!newAccount)
  }
  useEffect(() => {
    if (activeAccount && !accountsAreEqual(activeAccount, lastActiveAccount)) {
      setLastActiveAccount(() => activeAccount)
    }
  }, [activeAccount])


 // Connect to injected wallet
 const connect = async (
    chain?: SubstrateChain,
    wallet?: SubstrateWallet,
    lastActiveAccountAddress?: string,
  ) => {
    setError(undefined)
    setIsConnecting(true)
    setIsConnected(!!activeAccount)

    // Make sure api is initialized & connected to provider
    
    if (!api?.isConnected || isInitialized || (chain && chain.network !== activeChain.network)) {
      await initialize(chain)
      try {
      // Determine installed wallets
      const wallets = allSubstrateWallets.filter((w) => isWalletInstalled(w))
      if (!wallets?.length) {
        const message = 'No Substrate-compatible extension detected'
        setError({
          code: PolkitErrorCodes.NoSubstrateExtensionDetected,
          message,
        })
        throw new Error(message)
      }

      // Determine wallet to use
      const preferredWallet = wallet && wallets.find((w) => w.id === wallet.id)
      const _wallet = preferredWallet //|| wallets[0]

      // Enable wallet

          // @ts-ignore
      const extension = await enableWallet(_wallet, appName)
      const signer = extension?.signer as Signer
      setActiveExtension(extension)
      setActiveSigner(signer)

      // NOTE: Special handling for Nightly Wallet
      if (extension?.name === nightly.id) {
        const accounts = (extension?.accounts as any)?.activeAccounts
        if (accounts?.length) updateAccounts(accounts, lastActiveAccountAddress)
        else throw new Error('No injected account found')
      }

      // Query & keep listening to injected accounts
      unsubscribeAccounts?.()
      const unsubscribe = extension?.accounts.subscribe((accounts) => {
        updateAccounts(accounts, lastActiveAccountAddress)
      })
      setUnsubscribeAccounts(unsubscribe)
    } catch (e: any) {
      console.error('Error while connecting wallet:', e)
      setActiveExtension(undefined)
      setActiveSigner(undefined)
      setIsConnected(false)
    } finally {
      setIsConnecting(false)
    }
  }}
  
    // Keep active signer up to date
    useEffect(() => {
      api?.setSigner(activeSigner as Signer)
    }, [api, activeSigner])
      // Disconnect
  const disconnect = async (disconnectApi?: boolean) => {
    if (disconnectApi) {
      await api?.disconnect()
      return
    }
    setIsConnected(false)
    updateAccounts([])
    unsubscribeAccounts?.()
    setUnsubscribeAccounts(undefined)
    setActiveExtension(undefined)
  }

  // API Disconnection listener
  useEffect(() => {
    const handler = () => {
      disconnect()
      setIsInitialized(false)
    }
    api?.on('disconnected', handler)
    return () => {
      api?.off('disconnected', handler)
    }
  }, [api])

    // Initialze
  useEffect(() => {
    connectOnInit ? connect() : initialize()
    return () => {
      unsubscribeAccounts?.()
    }
  }, [])

   // Special  case  for switching  chains 

   const switchNetwork = async (
    chain?: SubstrateChain,
    wallet?: SubstrateWallet,
    lastActiveAccountAddress?: string,
  ) => {
    setError(undefined)
    setIsConnecting(true)
    setIsConnected(!!activeAccount)

    // Make sure api is initialized & connected to provider
    
    if (!api?.isConnected  || (chain && chain.network !== activeChain.network)) {
      await initialize(chain)
      try {
      // Determine installed wallets
      const wallets = allSubstrateWallets.filter((w) => isWalletInstalled(w))
      if (!wallets?.length) {
        const message = 'No Substrate-compatible extension detected'
        setError({
          code: PolkitErrorCodes.NoSubstrateExtensionDetected,
          message,
        })
        throw new Error(message)
      }

      // Determine wallet to use
      const preferredWallet = wallet && wallets.find((w) => w.id === wallet.id)
      const _wallet = preferredWallet //|| wallets[0]

      // Enable wallet

          // @ts-ignore
      const extension = await enableWallet(_wallet, appName)
      const signer = extension?.signer as Signer
      setActiveExtension(extension)
      setActiveSigner(signer)

      // NOTE: Special handling for Nightly Wallet
      if (extension?.name === nightly.id) {
        const accounts = (extension?.accounts as any)?.activeAccounts
        if (accounts?.length) updateAccounts(accounts, lastActiveAccountAddress)
        else throw new Error('No injected account found')
      }

      // Query & keep listening to injected accounts
      unsubscribeAccounts?.()
      const unsubscribe = extension?.accounts.subscribe((accounts) => {
        updateAccounts(accounts, lastActiveAccountAddress)
      })
      setUnsubscribeAccounts(unsubscribe)
    } catch (e: any) {
      console.error('Error while connecting wallet:', e)
      setActiveExtension(undefined)
      setActiveSigner(undefined)
      setIsConnected(false)
    } finally {
      setIsConnecting(false)
    }
  }}

  // handle switch  chains

 const handleSwitchChains  = () => {
  setisSwitchChains(!isSwitchChains)
}

  const switchActiveChain = async (chain: SubstrateChain) => {
    const activeWallet = activeExtension && getSubstrateWallet(activeExtension.name)
    await switchNetwork(chain, activeWallet)
    handleSwitchChains()
  }

   // handle connect modal 
   const handleConnectModal = () => {
    setisConnectModal(! isConnectModal)
 }

   // handle disconnect modal 
   const  handleDisconnectModal = () => {
    setisDisconnectModal(! isDisconnectModal)
 }


   // Value of the global state 
   const value = {
    isConnectModal,
    isDisconnectModal,
    themeConfig,
    isSwitchChains,
    handleSwitchChains,
    handleConnectModal,
    handleDisconnectModal,
    defaultChain,
    connect,
    accounts,
    isConnecting,
    isInitializing,
    isInitialized,
    activeAccount,
    activeChain,
    activeExtension,
    activeSigner,
    lastActiveAccount,
    disconnect,
    api,
    isConnected,
    switchActiveChain
    
   }

   return(
    <PolkitContext.Provider value={value}>
        {children}
    </PolkitContext.Provider>
   )
}