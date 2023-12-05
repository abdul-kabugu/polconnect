import { Core } from '@walletconnect/core'
import { Web3Wallet } from '@walletconnect/web3wallet'

export const initWalletConnect = async (projectId? : any) => {
    const core = new Core({ projectId: projectId || '31368d737c27fcd50a91d50f8653c698' })
const web3wallet = await Web3Wallet.init({
  core: core,
  metadata: {
    name: 'Polconnect',
    description: 'The react library for seamlessly integrating wallet',
    url: 'polconnect.kabugu.xyz',
    icons: []
  }
})
}