import React from "react"
import Divider from '@mui/material/Divider'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'


function OZHeaderMenu() {
  return (
    <div className="headerMenuContainer">
      <div className="btnConnectWallet">
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
