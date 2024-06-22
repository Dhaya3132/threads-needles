import React from 'react'
import Navbar from './Navbar/Navbar';
import Head from './Header/Head';
import Service from './Service';
import Why from './Whyus/Why';
import About from './About';
import VisitUs from './VisitUs';
import Together from './Together';


function Heads() {
  return (
    <div>
      <Navbar></Navbar>
      <Head></Head>
      <Service></Service>
      <Why></Why>
      <About></About>
      <VisitUs></VisitUs>
      <Together></Together>

    </div>
  )
}

export default Heads