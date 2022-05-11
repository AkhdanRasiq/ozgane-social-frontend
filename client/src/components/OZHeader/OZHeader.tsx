import React from "react"
import Image from 'next/image'
import OZHeaderMenu from "./fragments/OZHeaderMenu"
import OZHeaderSearch from "./fragments/OZHeaderSearch"
import OZSidebar from "../OZSidebar/OZSidebar"


function OZHeader() {
  return (
    <div className="headerNav">
      <OZSidebar />
      <div className="imgMainLogo">
        <Image layout="responsive" src={require('../../assets/img/logo_main.png')} />
      </div>
      <p id="txtHeaderTitle">Ozgane</p>

      <OZHeaderSearch />

      <OZHeaderMenu />
    </div>
  )
}

export default OZHeader
