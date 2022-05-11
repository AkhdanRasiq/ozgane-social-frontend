import { ethers } from 'ethers'


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
  console.log(address)
  const balances = await metamask.request({
    method: "eth_getBalance",
    params: [address, "latest"]
  })
  .then((balance: string) => {
    console.log(ethers.utils.formatEther(balance))
  }, (error: any) => {
    console.error(error)
  })
}

export function connectWallet() {
  const metamask = window.ethereum

  if (!metamask)
    return alert('Please install metamask!')

  _getAccount(metamask)
  .then((account) =>  { 
                        _getBalance(metamask, account)
                      },
        (error)   =>  { console.error(error) })

}
