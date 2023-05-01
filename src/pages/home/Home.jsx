import React from 'react';
import "./Home.css"
import MainHeader from '../../components/MainHeader';
import Services from '../../components/Services';
import Values from '../../components/Values';
import Faqs from '../../components/Faqs';
import Testimonials from '../../components/Testimonials';

const Home = () => {
  return (
    <>
      <MainHeader />
      <Services />
      <Values />
      <Faqs />
      <Testimonials />
    </>
  )
}

export default Home