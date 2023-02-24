import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Table} from './Table';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export function NavbarR(props) {

    const {crimeData} = props;

    return (
        <Router>
            <Navbar bg="secondary" variant="dark" expand="lg" fixed="top">
            <Container>
                <Link href="/">Seattle Crime 🔎</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link href="/">About</Link>
                    <Link href="/map">Map</Link>
                    <Link href="/table">Table Analysis</Link>
                    <Link href="/tips">Resources and Tips</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <Routes>
                <Route path="/">
                    
                </Route>

                <Route path="/map">
                    
                </Route>

                <Route path="/table">
                    <Table crimeData={crimeData}/>
                </Route>

                <Route path="/tips">
                    
                </Route>
            </Routes>
        </Router>
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