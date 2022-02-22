import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// components
import Navbar from '@components/Navbar'
import Banner from '@components/Home/Banner'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <footer></footer>
    </div>
  )
}

export default Home
