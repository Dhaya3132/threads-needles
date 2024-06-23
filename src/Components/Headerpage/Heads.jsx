// Heads.js
import React from 'react';
import Navbar from './Navbar/Navbar';
import Head from './Header/Head';
import Service from './Service';
import Why from './Whyus/Why';
import About from './About';
import VisitUs from './VisitUs';
import Together from './Together';
import Carlous from './Carlous';
import Footer from './Footer';
import withScrollAnimation from './ScrollAnimation';

const AnimatedNavbar = withScrollAnimation(Navbar);
const AnimatedHead = withScrollAnimation(Head);
const AnimatedService = withScrollAnimation(Service);
const AnimatedWhy = withScrollAnimation(Why);
const AnimatedAbout = withScrollAnimation(About);
const AnimatedVisitUs = withScrollAnimation(VisitUs);
const AnimatedTogether = withScrollAnimation(Together);
const AnimatedCarlous = withScrollAnimation(Carlous);
const AnimatedFooter = withScrollAnimation(Footer);

function Heads() {
  return (
    <div>
      <AnimatedNavbar />
      <AnimatedHead />
      <AnimatedService />
      <AnimatedWhy />
      <AnimatedAbout />
      <AnimatedVisitUs />
      <AnimatedTogether />
      <AnimatedCarlous />
      <AnimatedFooter />
    </div>
  );
}

export default Heads;
