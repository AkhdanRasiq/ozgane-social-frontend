import Image from "next/image"
import React from "react"
import { I_OZBtnActionIconProps } from "./interface/OZBtnInterface"


function OZBtnActionIcon({ className, a_img, a_strText, onClickCallback }: I_OZBtnActionIconProps) {
  return (
    <div className={`btnActionIconContainer ${className}`} onClick={onClickCallback}>
      <div className="imgActionIcon noSelect">
        <Image src={a_img} layout="responsive" />
      </div>
      <p className="noSelect">{a_strText}</p>
    </div>
  )
}

export default OZBtnActionIcon
