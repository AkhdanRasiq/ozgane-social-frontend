import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import OZHeader from '../components/OZHeader/OZHeader'


const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#181B24] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`
}


const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <OZHeader />
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  )
}

export default Home
