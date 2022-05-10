import React, { useState } from "react"
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'

import { IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import OZSidebarHeader from "./fragments/OZSidebarHeader"
import OZBtnActionIcon from "../Properties/button/OZBtnActionIcon"
import OZSidebarBalance from "./fragments/OZSidebarBalance"
import OZSidebarInfo from "./fragments/OZSidebarInfo"


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

    const handleOnCloseClick = () => {
      setState(false)
      console.log("tutup")
    }


    const sidebarDrawer = () => (
      <Box
        className="boxSidebarDrawer"
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        <OZSidebarHeader
          callbackOnCloseClick={handleOnCloseClick}
        />
        <OZSidebarBalance />

        <OZSidebarInfo />

        <div className="w-[100%] flex justify-center mt-[25px]">
          <OZBtnActionIcon
            className ="!px-[25px]"
            a_strText = "Send"
            a_img     = {require('../../assets/img/icon/icon_coin.png')}
          />
          <OZBtnActionIcon
            className = "ml-[5px]"
            a_strText = "Request"
            a_img     = {require('../../assets/img/icon/icon_request_coin.png')}
          />
        </div>
        <div className="w-[100%] flex justify-center mt-[7px]">
          <OZBtnActionIcon
            className = "!px-[42px] !border-[#FF0000] hover:!bg-[#FF0000]"
            a_strText = "Disconnect Wallet"
            a_img     = {require('../../assets/img/icon/icon_disconnect.png')}
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
