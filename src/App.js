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

// let crimeData = [{
//     "Report DateTime": 1580901871000,
//     "MCPP": "MAGNOLIA",
//     "Offense Parent Group": "DRUG\/NARCOTIC OFFENSES",
//     "Offense": "Drug\/Narcotic Violations",
//     "Longitude": -122.385973723,
//     "Latitude": 47.64938723
// },
// {
//     "Report DateTime": 1580897188000,
//     "MCPP": "ROOSEVELT\/RAVENNA",
//     "Offense Parent Group": "LARCENY-THEFT",
//     "Offense": "Theft of Motor Vehicle Parts or Accessories",
//     "Longitude": -122.323399063,
//     "Latitude": 47.67511789
// },
// {
//     "Report DateTime": 1580895573000,
//     "MCPP": "ROOSEVELT\/RAVENNA",
//     "Offense Parent Group": "ROBBERY",
//     "Offense": "Robbery", "Longitude": -122.29955218,
//     "Latitude": 47.66638407
// },
// {
//     "Report DateTime": 1580873455000,
//     "MCPP": "MAGNOLIA",
//     "Offense Parent Group": "DESTRUCTION\/DAMAGE\/VANDALISM OF PROPERTY",
//     "Offense": "Destruction\/Damage\/Vandalism of Property",
//     "Longitude": -122.384864805,
//     "Latitude": 47.64292734
// }];

// const parseCrimeData = crimeData.map((crime) => {
//     return { ...crime, "Report DateTime": new Date(crime["Report DateTime"]) }
// })

function App(props) {

    const parseCrimeData = props.crimeData.map((crime) => {
        return { ...crime, "Report DateTime": new Date(crime["Report DateTime"]) }
    })

    console.log(parseCrimeData);

    const uniqueCountry = [...new Set(props.crimeData.reduce((all, current) => {
        return all.concat([current.MCPP]);
      }, []))].sort();

    let crimeName = "";
    let getCrimeType = (crimeType) => {
        crimeName = crimeType.value;
    };

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