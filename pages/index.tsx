import type { NextPage } from 'next'
import { signIn,useSession } from 'next-auth/react'
import { Navbar } from '../components/navbar'

const Home: NextPage = () => {
  return (
    <Navbar />

  )
}

export default Home
