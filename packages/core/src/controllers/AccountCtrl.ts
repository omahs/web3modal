import { proxy, subscribe as valtioSub } from 'valtio/vanilla'
import type { Account } from '../../types/accountTypes'

// -- initial state ------------------------------------------------ //
export const initialAccountlState = {
  connected: false,
  chainSupported: false,
  address: '',
  chainId: '',
  connector: '',
  balance: '',
  ensAvatar: ''
}

const state = proxy<Account>(initialAccountlState)

// -- controller --------------------------------------------------- //
export const AccountCtrl = {
  state,

  subscribe(callback: (newState: Account) => void) {
    return valtioSub(state, () => callback(state))
  },

  setAccount(account: Omit<Account, 'connected'>) {
    Object.assign(state, account)
    state.connected = true
  },

  setAddress(address: Account['address']) {
    state.address = address
  },

  setChain(chainId: Account['chainId'], chainSupported: Account['chainSupported']) {
    state.chainId = chainId
    state.chainSupported = chainSupported
  },

  setBalance(balance: Account['balance']) {
    state.balance = balance
  },

  setEnsAvatar(ensAvatar: Account['ensAvatar']) {
    state.ensAvatar = ensAvatar
  },

  resetAccount() {
    Object.assign(state, initialAccountlState)
  }
}
