import React, { useRef, useState } from 'react'
import Image from "next/image"
import Tooltip from '@mui/material/Tooltip'
import { I_OZBtnCopyContentProps } from './interface/OZBtnInterface'
import CONFIG from '../../../static/config.json'


function OZBtnCopyContent({ a_strText }: I_OZBtnCopyContentProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [tooltipText, setTooltipText] = useState("")

  const handleOpenTooltip = () => {
    try {
      navigator.clipboard.writeText(a_strText)
      setTooltipText("Copied to Clipboard!")
    } catch (error) {
      setTooltipText("Protocol not Secured!")
    }
    setTooltipOpen(true)
    setTimeout(() => {
      setTooltipOpen(false)
    }, CONFIG.time.fast_ms)
  }


  return (
    <Tooltip
      title={tooltipText}
      open={tooltipOpen}
      PopperProps={{
        disablePortal: true,
      }}
      arrow
      disableFocusListener
      disableHoverListener
      disableTouchListener
    >
      <div className="btnCopyContentContainer">
          <p className="txtCopyContent">{a_strText}</p>
          <div className="imgBtnCopyContent" onClick={handleOpenTooltip}>
            <Image className='noSelect' src={require('../../../assets/img/icon/icon_copy.png')} layout="responsive" />
          </div>
      </div>
    </Tooltip>
  )
}

export default OZBtnCopyContent