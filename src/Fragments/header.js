import React from "react";

import { useEffect, useState } from "react";

import { Nav, Navbar, Container} from "react-bootstrap";

import logo from "./assets/img/logo/cropped-logo-sin-nombre.png";

import "bootstrap/dist/css/bootstrap.min.css";

import Headroom from "react-headroom";

import { Link } from "react-scroll";

import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const activeStyle = {
    color: 'orange'
  }
  return (
    <React.Fragment>
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
                {" "}<Link offset={0} smooth={false} to={"relleno"}>
                  <NavLink to="/">
                    <img src={logo} class="logo rounded-top" alt="logo" />
                  </NavLink>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link />

                  <React.Fragment>
            <Nav.Link>
              <NavLink style={({ isActive }) =>
              isActive ? activeStyle : {color: "inherit"}} to="/">
                Inicio
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink style={({ isActive }) =>
              isActive ? activeStyle : {color: "inherit"}} to="/about">
                Historia
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink style={({ isActive }) =>
              isActive ? activeStyle : {color: "inherit"}} to="/services">
                Servicios
              </NavLink>
              </Nav.Link>
              <Nav.Link>

              <NavLink style={({ isActive }) =>
              isActive ? activeStyle : {color: "inherit"}} to="/newsletter">
                Ofertas
              </NavLink>
           
            </Nav.Link>
            <Nav.Link href="">
              <NavLink style={({ isActive }) =>
              isActive ? activeStyle : {color: "inherit"}} to="/contact">
                Contactanos
              </NavLink>
            </Nav.Link>
          </React.Fragment>
  
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
