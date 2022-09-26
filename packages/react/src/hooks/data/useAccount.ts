import { AccountCtrl } from '@web3modal/core'
import { useEffect, useState } from 'react'
import { useClientInitialized } from './useClientInitialized'

export function useAccount() {
  const [data, setData] = useState(AccountCtrl.state)
  const initialized = useClientInitialized()

  useEffect(() => {
    let unWatch: (() => void) | undefined = undefined
    let unSubscribe: (() => void) | undefined = undefined
    if (initialized) {
      unSubscribe = AccountCtrl.subscribe(newData => setData({ ...newData }))
      unWatch = AccountCtrl.watch()
      AccountCtrl.get()
    }

    return () => {
      unSubscribe?.()
      unWatch?.()
    }
  }, [initialized])

  return data
}
