import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import VideoCards from './components/VideoCards'
import UserTestimonials from './components/UserTestimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <VideoCards/>
      <UserTestimonials/>
      <CTASection/>
      <Footer/>
    </>
  )
}

export default App
