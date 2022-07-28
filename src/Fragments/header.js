import React from "react";

import { useEffect, useRef, useLayoutEffect } from "react";

import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

import logo from "./assets/img/logo/cropped-logo-sin-nombre.png";

import "bootstrap/dist/css/bootstrap.min.css";

import Headroom from "react-headroom";

import { Link } from "react-scroll";

function Header() {
  return (
    <React.Fragment>
      <div id="relleno"></div>
      <Headroom id="headroom" wrapperStyle={true}>
        <header className="App-header" id="header">
          <Navbar
            id="navbar"
            collapseOnSelect
            expand="lg"
            bg="#000"
            variant="dark"
          >
            <Container>
              <Navbar.Brand href="">
                {" "}
                <Link offset={0} smooth={false} to={'relleno'}>
                  <img src={logo} class="logo rounded-top" alt="logo"></img>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="">
                    <Link offset={0} smooth={false} to={'info-section'}>¿Quienes Somos?</Link>
                  </Nav.Link>
                  <Nav.Link href="">
                    <Link offset={0} smooth={false} to={'history-container'}>Historia</Link>
                  </Nav.Link>
                  <Nav.Link href="">
                  <Link offset={0} smooth={false} to={'services-section'}>Servicios</Link>
                  </Nav.Link>
                  <Nav.Link href="">
                  <Link offset={-10} smooth={false} to={'team-section'}>Equipo</Link>
                  </Nav.Link>
                  <Nav.Link href="">
                  <Link offset={0} smooth={false} to={'contact-us-section'}>Newsletter</Link>
                  </Nav.Link>
                  <Nav.Link href="">
                  <Link offset={0} smooth={false} to={'ContactUsFragment-container'}>Contactanos</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </Headroom>
    </React.Fragment>
  );
}
export { Header };
