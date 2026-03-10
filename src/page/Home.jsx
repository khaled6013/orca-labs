import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Projects from '../components/Projects'
import About from '../components/About'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Services></Services>
    <Projects></Projects>
    <About></About>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
  )
}

export default Home