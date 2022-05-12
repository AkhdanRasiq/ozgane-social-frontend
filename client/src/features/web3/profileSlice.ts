import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../../app/store'
import { IProfileSlice } from './interface/OZWeb3SliceInterface'


const initialState: IProfileSlice = {
  account: {
    address: '0x0',
    balance: '',
    network: ''
  }
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<any>) => {
      state.account = action.payload.account
    },
    setBalance: (state, action: PayloadAction<any>) => {
      state.account.balance = action.payload.balance
    }
  }
})

export const {
  setAccount,
  setBalance
} = profileSlice.actions

export const selectCurrentAccount = (state: AppState) => state.profile.account

export default profileSlice.reducer
