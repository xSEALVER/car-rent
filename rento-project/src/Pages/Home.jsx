import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import AboutComp from '../Components/AboutComp';
import ServicesComp from '../Components/ServicesComp';

function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutComp/>
        <ServicesComp/>
    </>
  )
}

export default Home