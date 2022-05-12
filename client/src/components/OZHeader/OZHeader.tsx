import React, { useEffect } from "react"
import Image from 'next/image'
import OZHeaderMenu from "./fragments/OZHeaderMenu"
import OZHeaderSearch from "./fragments/OZHeaderSearch"
import OZSidebar from "../OZSidebar/OZSidebar"

import { useAppDispatch } from "../../app/hooks"
import { setAccount } from "../../features/web3/profileSlice"
import { stateProfileGenerator } from "../../tools/dataGenerator"


function OZHeader() {
  const dispatch          = useAppDispatch()

  useEffect(() => {
    // const accountWasChanged = async () => {

    //   console.log('accountWasChanged')
    // }
    // const chainWasChanged = async () => {

    //   console.log('chainWasChanged')
    // }
    // const getAndSetAccount = async () => {
    //   // dispatch(setAccount(await connectWallet()))

    //   console.log('getAndSetAccount')
    // }
    // const clearAccount = () => {
    //   dispatch(setAccount(stateProfileGenerator()))
    //   console.log('clearAccount')
    // }
    // window.ethereum.on('accountsChanged', accountWasChanged)
    // window.ethereum.on('chainChanged', chainWasChanged)
    // window.ethereum.on('connect', getAndSetAccount)
    // window.ethereum.on('disconnect', clearAccount)
    
    // return () => {
    //   // Return function of a non-async useEffect will clean up on component leaving screen, or from re-reneder to due dependency change
    //   window.ethereum.removeListener('accountsChanged', accountWasChanged)
    //   window.ethereum.removeListener('chainChanged', chainWasChanged)
    //   window.ethereum.removeListener('connect', getAndSetAccount)
    //   window.ethereum.removeListener('disconnect', clearAccount)
    // }
  }, [])

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
