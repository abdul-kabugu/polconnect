
# PolconnectKit

PolconnectKit - Your Seamless Polkadot Wallet Connector 👩🏻‍💻


| ![Static Badge](https://img.shields.io/badge/polkadot-blue) | ![Static Badge](https://img.shields.io/badge/substrate-red) | ![Static Badge](https://img.shields.io/badge/typescript-fuchsia) | ![Static Badge](https://img.shields.io/badge/npm-red) |
| --- | --- | --- | --- |





- 🔥 Out-of-the-box wallet management
- ✅ Easily customizable
- 💪🏼Built on top of polkadot api
- 👌🏻 Cross Chain Support
- 🦄 Supports All wallets


## Motivition


In the Polkadot ecosystem, you can utilize the web3Enable function to access all injected extensions in a user's browser and the web3Accounts() method to retrieve user addresses. 

While this approach may seem functional, it comes with its own set of challenges. Imagine a scenario where a user has multiple Polkadot-wallets extensions installed in their browser. When web3Enable() is initialized, all these installed wallets pop up, significantly disrupting the user interface and leading to a less-than-optimal user experience.

Take a look at the image below, 


![polkadot Image](https://i.ibb.co/MnZT9bQ/photo-2023-10-09-12-25-29.jpg)


Not only does this lead to a compromised user experience, but it also places a burden on developers who need to write extensive code to manage these wallet interactions.

Polconnect, your solution to these challenges. With Polconnect, all it takes is a single line of code. Users can easily select their preferred wallets, manage chains, and seamlessly connect to retrieve user addresses,



## Installation

Install  with npm
```bash
  npm install polconnect @polkadot/api
```
 or Install  with yarn
```bash
  yarn add  polconnect @polkadot/api
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

For full Documentation  Visit  [polconnect.xyz](polconnect.kabugu.xyz/)




## 🔗 Author Links

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/KabuguAbdul)







