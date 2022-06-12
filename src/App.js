
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
          <Placeholder id='placeholder'></Placeholder>
        <section id='services-section'>
          <div id='services-container'>
          <div className='service_item'>
            <Services
              img_holder={require('./img/servicios/adopta_un_arbol/177819528_494547941957756_8235950911964960558_n.jpg')}
              header='Web Development'
              subtitle='We can build your website from scratch or redevelop your existing website.'
              body='lorem ipsum'
            ></Services>  
          </div>
          <div className='service_item'>
            <Services
              img_holder={require('./img/servicios/adopta_un_arbol/177819528_494547941957756_8235950911964960558_n.jpg')}
              header='Web Development'
              subtitle='We can build your website from scratch or redevelop your existing website.'
              body='lorem ipsum'
            ></Services>  
          </div>
          <div className='service_item'>
            <Services
              img_holder={require('./img/servicios/adopta_un_arbol/177819528_494547941957756_8235950911964960558_n.jpg')}
              header='Web Development'
              subtitle='We can build your website from scratch or redevelop your existing website.'
              body='lorem ipsum'
            ></Services>  
          </div>
          <div className='service_item'>
            <Services
              img_holder={require('./img/servicios/adopta_un_arbol/177819528_494547941957756_8235950911964960558_n.jpg')}
              header='Web Development'
              subtitle='We can build your website from scratch or redevelop your existing website.'
              body='lorem ipsum'
            ></Services>  
          </div>
          <div className='service_item'>
            <Services
              img_holder={require('./img/servicios/adopta_un_arbol/177819528_494547941957756_8235950911964960558_n.jpg')}
              header='Web Development'
              subtitle='We can build your website from scratch or redevelop your existing website.'
              body='lorem ipsum'
            ></Services>  
          </div>
          <div className='service_item'>
            <Services
              img_holder={require('./img/servicios/adopta_un_arbol/177819528_494547941957756_8235950911964960558_n.jpg')}
              header='Web Development'
              subtitle='We can build your website from scratch or redevelop your existing website.'
              body='lorem ipsum'
            ></Services>  
          </div>
          
          </div>
        </section>

          
        
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
