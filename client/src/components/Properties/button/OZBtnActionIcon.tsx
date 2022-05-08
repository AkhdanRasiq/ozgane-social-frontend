import Image from "next/image"
import React from "react"


function OZBtnActionIcon() {
  return (
    <div className="btnActionIconContainer">
      <div className="imgActionIcon">
        <Image src="/#" layout="responsive" width={0} height={0} />
      </div>
      <p className="txtNoSelect">hello</p>
    </div>
  )
}

export default OZBtnActionIcon
