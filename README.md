
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

import {PolconnectProvider, astar} from 'polconnect'

function App({ Component, pageProps }: AppProps) {
  return(
      <PolconnectProvider theme='dark' defaultChain={astar} appName='testing'>
       <Component {...pageProps} />
</PolconnectProvider>     
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

For full Documentation  visit   kabugu.polconnect.xyz




# Created By
![Static Badge](https://img.shields.io/badge/abdul%20kabugu-lighblue?link=https%3A%2F%2Ftwitter.com%2FKabuguAbdul)



