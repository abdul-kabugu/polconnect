
# PolconnectKit

PolconnectKit - Your Seamless Polkadot Wallet Connector 👩🏻‍💻


| ![Static Badge](https://img.shields.io/badge/polkadot-blue) | ![Static Badge](https://img.shields.io/badge/substrate-red) | ![Static Badge](https://img.shields.io/badge/typescript-fuchsia) | ![Static Badge](https://img.shields.io/badge/npm-red) |
| --- | --- | --- | --- |





- 🔥 Out-of-the-box wallet management
- ✅ Easily customizable
- 💪🏼Built on top of polkadot api
- 👌🏻 Cross Chain Support
- 🦄 Supports All wallets


## Installation

Install  with npm
```bash
  npm install polconnect
```
 or Install  with yarn
```bash
  yarn add  polconnect
```
    
## Usage/Examples

```javascript
// nextjs example

import {PolkitProvider, astar} from 'polconnect'

function App({ Component, pageProps }: AppProps) {
  return(
      <PolkitProvider theme='dark' defaultChain={astar} appName='testing'>
       <Component {...pageProps} />
</PolkitProvider>     
  ) 
}

// Use Connect button from Your component

import {ConnectButton} from 'polconnect'

export default function Home() {
  return(
<ConnectButton label='connect wallet' showChain={true} backGround='blue'   />
 )
}
```

## Documentation

For full Documentation  Visit  [kabugu.polconnect.xyz](kabugu.polconnect.xyz/)
<<<<<<< HEAD
=======



## 🔗 Author Links

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/KabuguAbdul)
>>>>>>> 07f33c732e133696b781c395816a5aec5233d0a8




<<<<<<< HEAD
## 🔗 Author Links

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/KabuguAbdul)



=======
>>>>>>> 07f33c732e133696b781c395816a5aec5233d0a8

