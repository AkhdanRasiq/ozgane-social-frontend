import React from "react"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'


function OZHeaderMenu() {
  return (
    <div>
      <div className="btnConnectWallet">
        <p id="txtConnectWallet">Connect</p>
        <AccountBalanceWalletIcon fontSize="medium" htmlColor="#FFFFFF" />
      </div>
    </div>
  )
}

export default OZHeaderMenu
