import React from "react"
import Divider from '@mui/material/Divider'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { connectWallet } from "../../../tools/adapters"

import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { selectCurrentAccount, setAccount } from '../../../features/web3/profileSlice'

import { useMoralis } from 'react-moralis'


function OZHeaderMenu() {
  const dispatch          = useAppDispatch()
  const { authenticate, isAuthenticated, user } = useMoralis()

  const handleConnectWallet = async () => {
    // dispatch(setAccount(await connectWallet()))

    if (!isAuthenticated) {

      await authenticate()
        .then(function (user) {
          console.log(user!.get("ethAddress"))
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  return (
    <div className="headerMenuContainer">
      <div className="btnConnectWallet" onClick={handleConnectWallet}>
        <p id="txtConnectWallet">Connect</p>
        <AccountBalanceWalletIcon fontSize="medium" htmlColor="#FFFFFF" />
      </div>

      <Divider id="dividerHeaderMenu" orientation="vertical" flexItem  />

      <NotificationsNoneIcon id="btnHeaderMenu" fontSize="large" htmlColor="#FFFFFF" />
      <MailOutlineIcon id="btnHeaderMenu" fontSize="large" htmlColor="#FFFFFF" />
      <PermIdentityIcon id="btnHeaderMenu" fontSize="large" htmlColor="#FFFFFF" />
    </div>
  )
}

export default OZHeaderMenu
