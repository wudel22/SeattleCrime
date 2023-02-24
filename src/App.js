import React from 'react';
import { NavbarR } from './Navbar.js'
import { Map } from './Map.js'
import { About } from './About';
import { Feature } from './Feature';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


function App(props) {

    const parseCrimeData = props.crimeData.map((crime) => {
        return { ...crime, "Report DateTime": new Date(crime["Report DateTime"]) }
    })

    console.log(parseCrimeData);

    const uniqueCountry = [...new Set(props.crimeData.reduce((all, current) => {
        return all.concat([current.MCPP]);
      }, []))].sort();

    return (
        <Router>
            <header>
                {/* Navbar */}
                <NavbarR crimeData={props.parseCrimeData} />

                {/* Basic info and titles */}
                <section id="top">
                    <img src="./img/seattle-skyline.jpg" alt="Seattle Space Needle and buildings"
                        title="Image by Ally Laws from Pixabay" className="header-img" />
                </section>
            </header>

            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/map" />
                <Route path="/table" element={<Feature parseCrimeData={parseCrimeData} crimeOptions={uniqueCountry}/>} />
                <Route path="/tips" />
            </Routes>
        </Router>
    );
}

export default App;