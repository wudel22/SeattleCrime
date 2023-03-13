import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function NavbarR() {
    return (
        <Navbar bg="black" variant="dark" expand="lg" fixed="top">
            <Container>
                <NavLink to="/" className="nav-link navbar-brand ms-3">Seattle Crime 🔎</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">About</NavLink>
                        <NavLink to="/map" className="nav-link">Map</NavLink>
                        <NavLink to="/table" className="nav-link">Table Analysis</NavLink>
                        <NavLink to="/tips" className="nav-link">Resources and Tips</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}