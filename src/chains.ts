/**
 * Substrate Chain Type
 */
export interface SubstrateChain {
    network: string
    name: string
    rpcUrls: [string, ...string[]]
    ss58Prefix?: number
    explorerUrls?: Partial<Record<SubstrateExplorer, string>>
    testnet?: boolean
    faucetUrls?: string[]
    logo : string
  }
  
  export enum SubstrateExplorer {
    Subscan = 'subscan',
    PolkadotJs = 'polkadotjs',
  }
  
  /**
   * Defined Substrate Chain Constants
   */
  
  /// Local Development Network
  export const development: SubstrateChain = {
    network: 'development',
    name: 'Local Development',
    ss58Prefix: 42,
    rpcUrls: ['ws://127.0.0.1:9944'],
    explorerUrls: {
      [SubstrateExplorer.PolkadotJs]: `https://polkadot.js.org/apps/?rpc=${encodeURIComponent(
        'ws://127.0.0.1:9944',
      )}/#/explorer`,
    },
    testnet: true,
    faucetUrls: ['https://polkadot.js.org/apps/#/accounts?rpc=ws://127.0.0.1:9944'],
    logo : "https://i.ibb.co/FY0W7JB/polk-jpg.jpg"
  }
  
  /// Testnets
  
  export const alephzeroTestnet: SubstrateChain = {
    network: 'alephzero-testnet',
    name: 'Aleph Zero Testnet',
    ss58Prefix: 42,
    rpcUrls: ['wss://ws.test.azero.dev'],
    explorerUrls: {
      [SubstrateExplorer.PolkadotJs]: `https://test.azero.dev/?rpc=${encodeURIComponent(
        'wss://ws.test.azero.dev',
      )}/#/explorer`,
    },
    testnet: true,
    faucetUrls: ['https://faucet.test.azero.dev'],
    logo : "https://i.ibb.co/3W1Jbmp/aleph-zero.jpg"
   
  }
  
  export const rococo: SubstrateChain = {
    network: 'rococo',
    name: 'Rococo',
    rpcUrls: ['wss://rococo-rpc.polkadot.io'],
    explorerUrls: {
      [SubstrateExplorer.Subscan]: `https://rococo.subscan.io`,
    },
    testnet: true,
    faucetUrls: ['https://matrix.to/#/#rococo-faucet:matrix.org'],
    logo : "https://i.ibb.co/gWyBQnz/kusama-jpg.jpg"
  }
  
  export const shibuya: SubstrateChain = {
    network: 'shibuya',
    name: 'Shibuya Testnet',
    ss58Prefix: 5,
    rpcUrls: ['wss://shibuya-rpc.dwellir.com'],
    explorerUrls: {
      [SubstrateExplorer.Subscan]: `https://shibuya.subscan.io`,
    },
    testnet: true,
    faucetUrls: ['https://portal.astar.network/#/shibuya-testnet/assets'],
    logo : "https://i.ibb.co/T0sNV9t/shibuya-2973f9db.png"
  }
  
  /// Canary Networks (Kusama)
  
  export const shiden: SubstrateChain = {
    network: 'shiden',
    name: 'Shiden',
    ss58Prefix: 5,
    rpcUrls: ['wss://shiden-rpc.dwellir.com'],
    explorerUrls: {
      [SubstrateExplorer.Subscan]: `https://shiden.subscan.io`,
    },
    logo : "https://i.ibb.co/k8H0svT/shiden-logo.png"
  }
  
  /// Mainnets
  
  export const alephzero: SubstrateChain = {
    network: 'alephzero',
    name: 'Aleph Zero',
    ss58Prefix: 42,
    rpcUrls: ['wss://ws.azero.dev'],
    explorerUrls: {
      [SubstrateExplorer.Subscan]: `https://alephzero.subscan.io`,
      [SubstrateExplorer.PolkadotJs]: `https://azero.dev/?rpc=${encodeURIComponent(
        'wss://ws.azero.dev',
      )}/#/explorer`,
    },
    logo : "https://i.ibb.co/3W1Jbmp/aleph-zero.jpg"
  }
  
  export const astar: SubstrateChain = {
    network: 'astar',
    name: 'Astar',
    ss58Prefix: 5,
    rpcUrls: ['wss://astar-rpc.dwellir.com'],
    explorerUrls: {
      [SubstrateExplorer.Subscan]: `https://astar.subscan.io`,
    },
    faucetUrls: [],
    logo : "https://i.ibb.co/dL7WQq6/astar-net.png"
  }

  export const Unique: SubstrateChain = {
    network: 'Unique',
    name: 'Unique',
    ss58Prefix: 7391,
    rpcUrls: ['wss://ws.unique.network'],
    explorerUrls: {
      [SubstrateExplorer.Subscan]: `https://astar.subscan.io`,
    },
    faucetUrls: [],
    logo : "https://ipfs.unique.network/ipfs/QmbJ7CGZ2GxWMp7s6jy71UGzRsMe4w3KANKXDAExYWdaFR"
  }

  export const Quartz: SubstrateChain = {
    network: 'Quartz',
    name: 'Quartz',
    ss58Prefix: 255,
    rpcUrls: ['wss://ws-quartz.unique.network'],
    explorerUrls: {
      [SubstrateExplorer.Subscan]: `https://astar.subscan.io`,
    },
    faucetUrls: [],
    logo : "https://ipfs.unique.network/ipfs/QmaGPdccULQEFcCGxzstnmE8THfac2kSiGwvWRAiaRq4dp"
  }
  
  
  export const SubSocial: SubstrateChain = {
    network: 'Subsocial',
    name: 'Subsocial',
    ss58Prefix: 255,
    rpcUrls: ['wss://para.f3joule.space'],
    explorerUrls: {
      [SubstrateExplorer.Subscan]: `https://astar.subscan.io`,
    },
    faucetUrls: [],
    logo : "https://i.ibb.co/86htKn7/subsocial.jpg"
  }

  export const Moonbeam: SubstrateChain = {
    network: 'Moonbeam',
    name: 'Moonbeam',
    ss58Prefix: 255,
    rpcUrls: ['wss://moonbeam.public.blastapi.io'],
    explorerUrls: {
      [SubstrateExplorer.Subscan]: `https://astar.subscan.io`,
    },
    faucetUrls: [],
    logo : "https://i.ibb.co/1RtWYCD/moonbeam-logo.png"
  }

    export const Acala: SubstrateChain = {
    network: 'Acala',
    name: 'Acala',
    ss58Prefix: 255,
    rpcUrls: ['wss://eth-rpc-karura.aca-api.network/ws'],
    explorerUrls: {
      [SubstrateExplorer.Subscan]: `https://astar.subscan.io`,
    },
    faucetUrls: [],
    logo : "https://i.ibb.co/1RtWYCD/moonbeam-logo.png"
  }
  
  
  
  
  /**
   * Exporting all chains separately
   */
  export const allSubstrateChains: SubstrateChain[] = [
    SubSocial,
    Quartz,
    Unique,
    development,
    alephzeroTestnet,
    rococo,
    shibuya,
    shiden,
    alephzero,
    astar,
  ]
  
    export const allDefaultChains : SubstrateChain[] = [
       alephzero,
       Unique,
      Moonbeam,
      SubSocial,
      Quartz,
      shiden,
      shibuya,
      alephzeroTestnet,
      rococo,
      development

    ]
      
    
  /**
   * Returns chain (if existent) for given identifier (`network` field).
   */
  export const getSubstrateChain = (networkId?: string): SubstrateChain | undefined => {
    return allSubstrateChains.find(
      (chain) => chain.network.toLowerCase() === (networkId || '').toLowerCase(),
    )
  }