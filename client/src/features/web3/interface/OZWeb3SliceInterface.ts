interface _IProfileAccount {
  address: string,
  balance: string,
  network: string
}

export interface IProfileSlice {
  account: _IProfileAccount
}
