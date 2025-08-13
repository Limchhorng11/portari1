import React from 'react'

// Import Section Component
import Herosection from '../components/Herosection';
import Testimonial from '../components/Testimonial';
import Portfolio from '../components/Portfolio';
import Showskill from '../components/Showskill';  
import Benefit from '../components/Benefit';
import FAQ from '../components/FAQ';   

const Home = () => {
  return (
    <>
      <Herosection />
      <Showskill />
      <Benefit /> 
      <Portfolio />
      <Testimonial />
      <FAQ />
    </>
  )
}

export default Home