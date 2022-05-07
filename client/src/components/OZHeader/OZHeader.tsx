import React from "react"
import Image from 'next/image'
import { IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import OZHeaderMenu from "./fragments/OZHeaderMenu"
import OZHeaderSearch from "./fragments/OZHeaderSearch";


function OZHeader() {
  return (
    <div className="headerNav">
      <IconButton id="btnMessage" onClick={() => {console.log("Hai")}}>
        <MenuIcon fontSize="medium" htmlColor="#FFFFFF" />
      </IconButton>
      <div className="imgMainLogo">
        <Image layout="responsive" src={require('../../assets/img/logo_main.png')} alt="ozgane logo" />
      </div>
      <p id="txtHeaderTitle">Ozgane</p>

      <OZHeaderSearch />

      <OZHeaderMenu />
    </div>
  )
}

export default OZHeader
