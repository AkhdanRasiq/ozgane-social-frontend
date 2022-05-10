import React from "react"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import TokenIcon from '@mui/icons-material/Token'
import OZBtnCopyContent from "../../Properties/button/OZBtnCopyContent"


function OZSidebarInfo() {
  return (
    <div className="sidebarAccountInfoContainer">
      <div className="sidebarAddressContainer">
        <AccountBalanceWalletIcon id="imgSidebarInfo" fontSize="medium" htmlColor="#FFFFFF" />
        <OZBtnCopyContent
          a_strText="0x877b787aa682B725Ce24178F8542f9b49590986e"
        />
      </div>
      <div className="sidebarAddressContainer mt-[15px]">
        <TokenIcon id="imgSidebarInfo" fontSize="medium" htmlColor="#FFFFFF" />
        <p className="txtSidebarInfo mr-[37px]">ERC20</p>
      </div>
    </div>
  )
}

export default OZSidebarInfo
