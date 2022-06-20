// default React components

import React, {Component, useEffect, useRef } from 'react';

import {render} from 'react-dom';

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
          <Partner
                title='Sandra Milena Herrera'
                job = 'Representante Legal'
                img = {require('./img/team/na.png')}
                facebook = 'https://www.facebook.com/sandra.milena.herrera'
                twitter = 'https://twitter.com/sandra_milena'
                instagram = 'https://www.instagram.com/sandra_milena'
              />

          
        
      </main>

      <FooterFragment></FooterFragment>
    </div>
  );
}

export default App;
