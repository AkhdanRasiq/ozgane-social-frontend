import React, { useEffect } from "react"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import TokenIcon from '@mui/icons-material/Token'
import OZBtnCopyContent from "../../Properties/button/OZBtnCopyContent"

import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { selectCurrentAccount, setAccount } from '../../../features/web3/profileSlice'
import { checkConnection, connectWallet } from "../../../tools/adapters"
import { stateProfileGenerator } from "../../../tools/dataGenerator"


function OZSidebarInfo() {
  const currentAccount    = useAppSelector(selectCurrentAccount)
  const dispatch          = useAppDispatch()


  useEffect(() => {
    checkConnection().then((accounts) => {
      if(accounts) {
        dispatch(setAccount(stateProfileGenerator(accounts)))
      }
    }, (error) => {
      console.log(error)
    })
  }, [currentAccount])

  return (
    <div className="sidebarAccountInfoContainer">
      <div className="sidebarAddressContainer">
        <AccountBalanceWalletIcon id="imgSidebarInfo" fontSize="medium" htmlColor="#FFFFFF" onClick={() => console.log(currentAccount)}/>
        <OZBtnCopyContent
          a_strText={currentAccount.address}
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
