import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import profileReducer from '../features/web3/profileSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      profile: profileReducer
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
