import { ethers } from 'ethers'
import { stateProfileGenerator } from './dataGenerator'


async function _getAccount(metamask: any): Promise<string> {
  try {
    const accounts = await metamask.request({ method: 'eth_requestAccounts'})
    return Promise.resolve(accounts[0])
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}

async function _getBalance(metamask: any, address: string) {
  try {
    const balance = await metamask.request({
      method: "eth_getBalance",
      params: [address, "latest"]
    })
    return Promise.resolve(stateProfileGenerator(address, ethers.utils.formatEther(balance)))
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}

export async function connectWallet() {
  const metamask = window.ethereum

  if (!metamask)
    return alert('Please install metamask!')

  const account = await _getAccount(metamask)
  .then((account) => { return _getBalance(metamask, account) },
        (error)   => { console.error(error) })

  return account
}

export async function checkConnection(): Promise<string> {
  const metamask = window.ethereum

  try {
    const accounts = await metamask.request({ method: 'eth_accounts'})
    return Promise.resolve(accounts[0])
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}
