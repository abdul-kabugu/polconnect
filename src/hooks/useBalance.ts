import { BalanceFormatterOptions } from '../helpers/formatBlance'
import { BalanceData, getBalance, watchBalance } from '../helpers/getBalance'
import { AccountId } from '@polkadot/types/interfaces'
import { useEffect, useState } from 'react'
import { usePolkit } from '../providers/Provider'

/**
 * Hook that returns the native token balance of the given `address`.
 */
export const useBalance = (
  address?: string | AccountId,
  watch?: boolean,
  formatterOptions?: BalanceFormatterOptions,
): BalanceData => {
const {api} = usePolkit()
  const [balanceData, setBalanceData] = useState<BalanceData>({
    tokenSymbol: 'Unit',
    tokenDecimals: 12,
  } satisfies BalanceData)
  const [unsubscribes, setUnsubscribes] = useState<(VoidFunction | null)[]>([])

  useEffect(() => {
    const updateBalanceData = (data: BalanceData) => {
      setBalanceData(() => data)
    }

    if (!api) {
      updateBalanceData({} as BalanceData)
      return
    }

    if (watch) {
      watchBalance(api, address, updateBalanceData, formatterOptions).then((unsubscribe) => {
        setUnsubscribes((prev) => [...prev, unsubscribe])
      })
    } else {
      getBalance(api, address, formatterOptions).then(updateBalanceData)
    }

    return () => {
      unsubscribes.forEach((unsubscribe) => unsubscribe?.())
      setUnsubscribes(() => [])
    }
  }, [api, address])

  return balanceData
}