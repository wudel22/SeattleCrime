import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function NavbarR() {
    return (
        <Navbar bg="secondary" variant="dark" expand="lg" fixed="top">
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

// export function NavbarR() {
//     return (
//         <nav className="navbar navbar-expand-sm navbar-dark bg-secondary fixed-top">
//             <a className="navbar-brand ms-3" href="index.html">Seattle Crime 🔎</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//                 aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <a className="nav-NavLink" href="index.html">About</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-NavLink" href="map.html">Map</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-NavLink" href="table-page.html">Table Analysis</a>
//                     </li>
//                     <li class="nav-item">
//                         <a className="nav-NavLink" href="resource-tip.html">Resources and Tips</a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>

//     )
// }