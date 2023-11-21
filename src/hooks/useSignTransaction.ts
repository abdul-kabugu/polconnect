import { usePolkit } from "../providers/Provider";
import { useState } from "react";
export const useSignTransactions = ()=> {

    const [isSigningTx, setisSigningTx] = useState(false)
    const [isTxFinalized, setisTxFinalized] = useState(false)
    const [isTxFailed, setisTxFailed] = useState(false)
    const [currentStatus, setcurrentStatus] = useState<any>()

     const logTransaction = (result: any) => {
  
        const { status } = result
      
        if (!result || !status) {
          return
        }
        if (status.isFinalized) {
          const blockHash = status.isFinalized ? status.asFinalized : status.asInBlock
          console.log('Tx finalized. Block hash', blockHash.toString())
            setisTxFinalized(true)
        } else if (result.isError) {
          console.log(JSON.stringify(result))
          setisTxFailed(true)
          
        } else {
          console.log('⏱ Current tx status:', status.type)
          setcurrentStatus(status.type)
        }
      
        
      }

       const signAndSendTx = async (
        tx: any,
        accountId: string,
        callback?: (result: any) => void
      ) => {
        const { web3FromAddress } = await import('@polkadot/extension-dapp')
      
        const { signer } = await web3FromAddress(accountId)
        await tx.signAsync(accountId, { signer })
      
        await tx.send(callback ?? logTransaction)
      }
      
      return {
        signAndSendTx,
        isTxFailed,
        isTxFinalized,
        currentStatus
      }

}

