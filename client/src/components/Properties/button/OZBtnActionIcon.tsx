import Image from "next/image"
import React from "react"


interface IOZBtnActionIconProps {
  className ?: string,
  a_img     : HTMLImageElement,
  a_strText : string
}

function OZBtnActionIcon({ className, a_img, a_strText }: IOZBtnActionIconProps) {
  return (
    <div className={`btnActionIconContainer ${className}`}>
      <div className="imgActionIcon noSelect">
        <Image src={a_img} layout="responsive" />
      </div>
      <p className="noSelect">{a_strText}</p>
    </div>
  )
}

export default OZBtnActionIcon
