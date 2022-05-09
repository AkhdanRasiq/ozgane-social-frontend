import React, { useState } from "react"
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

import { IconButton } from "@mui/material"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import TokenIcon from '@mui/icons-material/Token'
import MenuIcon from '@mui/icons-material/Menu'
import OZSidebarHeader from "./fragments/OZSidebarHeader"
import ethIcon from '../../assets/img/crypto/eth.svg'
import Image from "next/image"
import OZBtnActionIcon from "../Properties/button/OZBtnActionIcon"


function OZSidebar() {
  const [state, setState] = useState(true)


  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setState(open)
    }

    // const sidebarDrawer = () => (
    //   <Box
    //     sx={{ width: 250 }}
    //     role="presentation"
    //     onClick={toggleDrawer(false)}
    //     onKeyDown={toggleDrawer(false)}
    //   >
    //     <List>
    //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //         <ListItem button key={text}>
    //           <ListItemIcon>
    //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //           </ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //     <Divider />
    //     <List>
    //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //         <ListItem button key={text}>
    //           <ListItemIcon>
    //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //           </ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //   </Box>
    // )

    const sidebarDrawer = () => (
      <Box
        className="boxSidebarDrawer"
        role="presentation"
        // onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <OZSidebarHeader />
        <div className="imgSidebarCryptoLogoContainer">
          <div className="imgSidebarCryptoLogo noSelect">
            <Image src={ethIcon} layout="responsive"/>
          </div>
          <p id="txtSidebarCryptoBalance">0.35472383 ETH</p>
          <p id="txtSidebarFiatBalance">$ 907.19</p>
        </div>

        <div className="sidebarAccountInfoContainer">
          <div className="sidebarAddressContainer">
            <AccountBalanceWalletIcon id="imgSidebarInfo" fontSize="medium" htmlColor="#FFFFFF" />
            <p className="txtSidebarInfo hoverColorGrayLight">0x877b787aa682B725Ce24178F8542f9b49590986e</p>
          </div>
          <div className="sidebarAddressContainer mt-[15px]">
            <TokenIcon id="imgSidebarInfo" fontSize="medium" htmlColor="#FFFFFF" />
            <p className="txtSidebarInfo">ERC20</p>
          </div>
        </div>

        <div className="w-[100%] flex justify-center mt-[25px]">
          <OZBtnActionIcon
            a_strText="Send"
            a_img={require('../../assets/img/icon/icon_send.png')}
          />
          <OZBtnActionIcon
            className="ml-[10px]"
            a_strText="Swap"
            a_img={require('../../assets/img/icon/icon_swap.png')}
          />
        </div>
        <div className="w-[100%] flex justify-center mt-[10px]">
          <OZBtnActionIcon
            className="!px-[25px] !border-[#FF0000] hover:!bg-[#FF0000]"
            a_strText="Disconnect Wallet"
            a_img={require('../../assets/img/icon/icon_disconnect.png')}
          />
        </div>

      </Box>
    )


  return(
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open</Button> */}
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="medium" htmlColor="#FFFFFF" />
      </IconButton>
      <Drawer
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
      >
        {sidebarDrawer()}
      </Drawer>
    </div>
  )
}

export default OZSidebar
