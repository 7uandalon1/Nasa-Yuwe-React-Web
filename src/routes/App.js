// default React components

import React, { Component, useEffect, useRef } from "react";

// import fragments

import { Header } from "../Fragments/header.js";

import { Placeholder } from "../Fragments/placeholder.js";

import { ServiceFragment } from "../Fragments/servicesFragment";

import { HistoryFragment } from "../Fragments/historyFragment.js";

import {ContactUsFragment} from '../Fragments/ContactUsFragment';

import { NewsletterFragment } from "../Fragments/newsletter.js";

import { TeamFragment } from "../Fragments/teamFragment.js";

import { ClientsFragment } from "../Fragments/clientsFragment.js";

import { FooterFragment } from "../Fragments/footerFragment.js";

// Import the bootstrap css

import "bootstrap/dist/css/bootstrap.min.css";

// Import the custom css
import "./styles/App.css";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

function App() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hiddenLeft: { opacity: 0, x: -100 },
    visibleLeft: { opacity: 1, x: 0 }
  };

  return (
    <div className="App">
      <Header></Header>
      <main>
        <motion.div
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          animate="hidden"
          transition={{ type: "spring", duration: 1.5 }}
          variants={variants}
        >
          <Placeholder />
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          animate="hidden"
          transition={{ duration: 1 }}
          variants={variants}
        >
          <HistoryFragment />
        </motion.div>
        <motion.div
          viewport={{ once: true, amount: 0.3 }}
          initial="hiddenLeft"
          whileInView="visibleLeft"
          animate="hidden"
          transition={{ duration: 1 }}
          variants={variants}
        >
          <ServiceFragment />
        </motion.div>
        <TeamFragment />
        {/* <ContactUsFragment></ContactUsFragment> */}
        <NewsletterFragment />
        <ClientsFragment />
      </main>

      {/* <FooterFragment></FooterFragment> */}
    </div>
  );
}

export default App;
