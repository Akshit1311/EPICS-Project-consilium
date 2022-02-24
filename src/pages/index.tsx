import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// components
import Navbar from '@components/Navbar'
import Banner from '@components/Home/Banner'
import SayHi from '@components/Home/SayHi/SayHi'

const Home: NextPage = () => {
  return (
    <div className="bg-[#12181B]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <SayHi />

      <footer></footer>
    </div>
  )
}

export default Home
