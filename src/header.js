import React from 'react';

import { useEffect, useRef, useLayoutEffect } from 'react';

import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';

import logo from './cropped-logo-sin-nombre.png';

import 'bootstrap/dist/css/bootstrap.min.css';

import Headroom from 'react-headroom';



function Header() {


    
    return (
            <React.Fragment>
                <div id="relleno"></div>
                <Headroom id='headroom'>
                <header className="App-header"  id='header'>
                    <Navbar id='navbar' collapseOnSelect expand="lg" bg="#000" variant="dark" >
                        <Container>
                            <Navbar.Brand href="#home"> <img src={logo}  class="logo rounded-top" alt=""></img></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
                </Headroom>
            </React.Fragment>
        )
    
}
export {Header};