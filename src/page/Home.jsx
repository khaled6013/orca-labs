import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Services></Services>
    <Projects></Projects>
    <Footer></Footer>
    </>
  )
}

export default Home