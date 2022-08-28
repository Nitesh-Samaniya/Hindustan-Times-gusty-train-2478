import React from 'react'
import Footer from '../Footer/Footer'
import HomePage from '../HomePage/HomePage'
import Navbar from '../Navbar/Navbar'
import Tags from '../Tags/Tags'

export default function LandingPage() {
  return (
    <div>
        <Navbar />
        <Tags />
        <HomePage />
        <Footer />
    </div>
  )
}
