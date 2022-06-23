// default React components

import React, {Component, useEffect, useRef } from 'react';

// import fragments

import {Header} from './header.js';

import { Placeholder } from './placeholder.js';

import {ServiceFragment} from './servicesFragment.js';

import {HistoryFragment} from './historyFragment.js';

// Import the bootstrap css

import 'bootstrap/dist/css/bootstrap.min.css';

// Import the custom css
import './App.css';
import { TeamFragment } from './teamFragment.js';

import { FooterFragment } from './footerFragment.js';

// Import the GSAP library


function App() {



  return (
    <div className="App">
       <Header></Header>
       <main>
          <Placeholder></Placeholder>
          <ServiceFragment></ServiceFragment>   
          <HistoryFragment></HistoryFragment>     
          <TeamFragment></TeamFragment>

          
        
      </main>

      <FooterFragment></FooterFragment>
    </div>
  );
}

export default App;
