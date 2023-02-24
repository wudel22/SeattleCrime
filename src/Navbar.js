import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavbarR() {
    return (
        <Navbar bg="secondary" variant="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#about">Seattle Crime 🔎</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#link">Map</Nav.Link>
                <Nav.Link href="#link">Table Analysis</Nav.Link>
                <Nav.Link href="#link">Resources and Tips</Nav.Link>
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
//                         <a className="nav-link" href="index.html">About</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="map.html">Map</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="table-page.html">Table Analysis</a>
//                     </li>
//                     <li class="nav-item">
//                         <a className="nav-link" href="resource-tip.html">Resources and Tips</a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>

//     )
// }