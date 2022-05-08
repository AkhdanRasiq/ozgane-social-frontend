import React from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { IconButton } from "@mui/material"


function OZSidebarHeader() {
  return(
    <div className="sidebarHeaderContainer">
      <IconButton id="btnSidebarHeaderClose">
        <ArrowBackIosNewIcon fontSize="large" htmlColor="#FFFFFF" />
      </IconButton>
    </div>
  )
}

export default OZSidebarHeader
