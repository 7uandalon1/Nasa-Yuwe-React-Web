// default React components

import React from "react";

// import fragments

import { Header } from "../Fragments/header.js";

import { Placeholder } from "../Fragments/placeholder.js";

import { InfoFragment } from "../Fragments/infoFragment";

import { ServiceFragment } from "../Fragments/servicesFragment";

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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Placeholder />
        <HistoryFragment />
        <InfoFragment></InfoFragment>
        <ServiceFragment />
        <TeamFragment />
        <NewsletterFragment />
        <ContactUsFragment></ContactUsFragment>
        <ClientsFragment />
      </main>

      <FooterFragment></FooterFragment>
    </div>
  );
}

export default App;
