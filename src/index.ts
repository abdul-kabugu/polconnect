import ConnectButton from "./components/Button/ConnectButton";
import { PolkitProvider, usePolkit } from "./providers/Provider";
import { astar, rococo, alephzero, alephzeroTestnet } from "./chains";
import { talisman, subwallet, nightly, nova, polkadotjs, enkrypt } from "./wallets";
import { isWalletInstalled , allDefaultWallets, allSubstrateWallets} from "./wallets";
import { useBalance } from "./hooks/useBalance";
import { useContract } from "./hooks/useContracts";

export {
    ConnectButton,
     PolkitProvider, 
     usePolkit, 
     astar,
      rococo, 
      alephzero,
     alephzeroTestnet,
      talisman,
      subwallet,
      nightly,
      nova,
      isWalletInstalled,
      polkadotjs,
      enkrypt,
      useBalance,
      useContract
    }