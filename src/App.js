
import React, {Component} from 'react';

import {Header} from './header.js';

import { Placeholder } from './placeholder.js';

import {Services} from './services.js';

import {render} from 'react-dom';

// Import the bootstrap css

import 'bootstrap/dist/css/bootstrap.min.css';

// Import the custom css
import './App.css';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <main>
          <Placeholder></Placeholder>
          <Services Title='Diego' Description='Holis' Icon="BsFlag"></Services>
          
        
      </main>
                
          <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

          <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin></script>

          <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin></script>
          <script></script>
       
    </div>
  );
}

export default App;
