import React from "react"
import Image from "next/image"
import ethIcon from '../../../assets/img/crypto/eth.svg'


function OZSidebarBalance() {
  return (
    <div className="imgSidebarCryptoLogoContainer">
      <div className="imgSidebarCryptoLogo noSelect">
        <Image src={ethIcon} layout="responsive"/>
      </div>
      <p id="txtSidebarCryptoBalance">0.35472383 ETH</p>
      <p id="txtSidebarFiatBalance">$ 907.19</p>
    </div>
  )
}

export default OZSidebarBalance
