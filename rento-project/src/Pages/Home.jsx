import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import AboutComp from '../Components/AboutComp';
import ServicesComp from '../Components/ServicesComp';
import CarListHome from '../Components/CarListHome';
import Testimonial from '../Components/Testimonial';
import AppStoreBanner from '../Components/AppStoreBanner';
import Contact from '../Components/ContactComp';
import Footer from '../Components/Footer';
import News from '../Components/News';

function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutComp/>
        <ServicesComp/>
        <CarListHome/>
        <Testimonial/>
        <AppStoreBanner/>
        <Contact/>
        <News/>
        <Footer/>
    </>
  )
}

export default Home