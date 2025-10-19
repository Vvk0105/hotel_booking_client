import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div>
        <HeroSection/>
        <Services/>
        <GallerySection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
