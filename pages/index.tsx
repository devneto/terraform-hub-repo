import type { NextPage } from 'next'
import { signIn,useSession } from 'next-auth/react'
import { Hero } from '../components/hero'
import { Navbar } from '../components/navbar'
import { SearchList } from '../components/search-list'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchList />
    </>
  )
}

export default Home
