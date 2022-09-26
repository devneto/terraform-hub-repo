import type { NextPage } from 'next'
import { signIn,useSession } from 'next-auth/react'
import { Footer } from '../components/organisms/footer'
import { Hero } from '../components/organisms/hero'
import { Navbar } from '../components/organisms/navbar'
import { SearchList } from '../components/organisms/search-list'
import { FindFiles } from '../components/templates/find-files'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FindFiles />
      <Footer />
    </>
  )
}

export default Home
