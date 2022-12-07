import React from 'react';

import { Footer, Blog, Posibility, Feature, WhatGPT3, Header } from './containers';
import {  Brand, CTA, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App