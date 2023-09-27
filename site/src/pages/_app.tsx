import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { PolkitProvider, alephzero } from 'polconnect'
export default function App({ Component, pageProps }: AppProps) {
  return(
  <PolkitProvider defaultChain={alephzero} appName='Test App' theme='dark'>
    <Component {...pageProps} />
  </PolkitProvider>
  ) 
}
