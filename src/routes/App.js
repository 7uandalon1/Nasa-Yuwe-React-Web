// default React components

import React from "react";

// import notfound svg 

import { ReactComponent as Notfound } from "../Fragments/assets/svg/undraw_page_not_found_re_e9o6.svg";

// import fragments

import { Header } from "../Fragments/header.js";

import { Placeholder } from "../Fragments/placeholder.js";

import { InfoFragment } from "../Fragments/infoFragment";

import { ServiceFragment } from "../Fragments/servicesFragment.jsx";

import { ProductFragment } from "../Fragments/productsFragment.jsx";

import { HistoryFragment } from "../Fragments/historyFragment.js";

import { ContactUsFragment } from "../Fragments/ContactUsFragment";

import { NewsletterFragment } from "../Fragments/newsletter.js";

import { TeamFragment } from "../Fragments/teamFragment.js";

import { ClientsFragment } from "../Fragments/clientsFragment.js";

import { FooterFragment } from "../Fragments/footerFragment.js";

// Import the bootstrap css

import "bootstrap/dist/css/bootstrap.min.css";

// Import the custom css
import "./styles/App.css";

// Import React Router

import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Header></Header>
      <div style={{position: 'relative', top: 0, left: 0, width: '100vw', height: '17vh', backgroundColor: 'black'}}></div>
      <Routes>
        <Route path='/' element={home()}></Route>
        <Route path='/about' element={about()}></Route>
        <Route path='/contact' element={contact()}></Route>
        <Route path='*' element={notfound()}></Route>
        <Route path='/services' element={services()}></Route>
        <Route path='/products' element={products()}></Route>
        <Route path='/team' element={team()}></Route>
        <Route path='/newsletter' element={newsletter()}></Route>
        {/*       <Route path='/about/mision' element={mision()}></Route>
      <Route path='/about/vision' element={vision()}></Route> */}
      </Routes>
      <div className="App">
        <FooterFragment></FooterFragment>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <a
          href="https://api.whatsapp.com/send?phone=573229108468&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios."
          class="float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-whatsapp my-float"></i>
        </a>

      </div>
    </HashRouter>
  );
}
function home() {
  return (
    <main>

      <Placeholder />
      <ClientsFragment />
    </main>
  )
}
function about() {
  return (
    <main>

      <HistoryFragment />
      <InfoFragment></InfoFragment>

    </main>
  )
}
function contact() {
  return (
    <ContactUsFragment></ContactUsFragment>
  )
}
function notfound() {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20vh' }}>
        <Notfound style={{ width: '100%', height: '100%', maxWidth: '50vw' }} />
        <h1 style={{ paddingTop: '5vh' }}>404 Not found</h1>
      </div>
    </React.Fragment>
  )
}
function services() {
  return (
    <React.Fragment>
      <ServiceFragment />
    </React.Fragment>
  )
}
function products() {
  return (
    <React.Fragment>
      <ProductFragment />
    </React.Fragment>
  )
}
function newsletter() {
  return (
    <React.Fragment>
      <NewsletterFragment />
    </React.Fragment>
  )
}
function team() {
  return (
    <React.Fragment>
      <TeamFragment style={{ paddingTop: '16vh' }} />
    </React.Fragment>
  )

}
export default App;
