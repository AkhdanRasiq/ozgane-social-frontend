export function stateProfileGenerator(strAddress: string = '0x0', strBalance: string = '', strNetwork: string = '') {
  const data = {
    account: {
      address: strAddress,
      balance: strBalance,
      network: strNetwork
    }
  }

  return data
}