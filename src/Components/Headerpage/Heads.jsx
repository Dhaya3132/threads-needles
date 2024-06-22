import React from 'react'
import Navbar from './Navbar/Navbar';
import Head from './Header/Head';
import Service from './Service';
import Why from './Whyus/Why';
import About from './About';


function Heads() {
  return (
    <div>
      <Navbar></Navbar>
      <Head></Head>
      <Service></Service>
      <Why></Why>
      <About></About>
    </div>
  )
}

export default Heads