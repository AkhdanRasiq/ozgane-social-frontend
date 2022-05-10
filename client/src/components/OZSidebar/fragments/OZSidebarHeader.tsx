import React from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { IconButton } from "@mui/material"


interface I_OZSidebarHeaderProps {
  callbackOnCloseClick: () => void
}


function OZSidebarHeader({ callbackOnCloseClick }: I_OZSidebarHeaderProps) {
  return(
    <div className="sidebarHeaderContainer">
      <IconButton id="btnSidebarHeaderClose" onClick={callbackOnCloseClick}>
        <ArrowBackIosNewIcon fontSize="large" htmlColor="#FFFFFF" />
      </IconButton>
    </div>
  )
}

export default OZSidebarHeader
