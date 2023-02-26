import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NavbarR } from './Navbar.js'
import { Map } from './Map.js'
import { AboutPage } from './pages/About';
import { MapPage } from './pages/MapPage'
import { Feature } from './Feature';

<App children={{ map: <Map /> }} />

function App(props) {
    var crimeData = props.crimeData;

    // const parseCrimeData = props.crimeData.map((crime) => {
    //     return { ...crime, "Report DateTime": new Date(crime["Report DateTime"]) }
    // })

    // console.log(parseCrimeData);

    // const uniqueCountry = [...new Set(props.crimeData.reduce((all, current) => {
    //     return all.concat([current.MCPP]);
    // }, []))].sort();
    let testLocations = [
        {
            name: "first",
            lat: "47.64072691",
            long: "-122.277063754"
        },
        {
            name: "second",
            lat: "47.69061787",
            long: "-122.359314737"
        },
    ]

    return (
        <>
            <NavbarR />
            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/map" element={<MapPage crimeData={crimeData} testLocations={testLocations}/>} />
                {/* <Route path="/table" element={<Feature parseCrimeData={parseCrimeData} crimeOptions={uniqueCountry}/>} /> */}
                {/* <Route path="/tips" /> */}
            </Routes>
            <footer>
                <div className="container pb-3 pt-3 d-flex flex-column min-vh-10">
                    <p>&copy; 2023 Ashley Mochizuki, Hannah Wee, Nicole Herman, Delaney Wu </p>
                </div>
            </footer>
        </>
    );
}
export default App;

// const parseCrimeData = crimeData.map((crime) => {
//     return { ...crime, "Report DateTime": new Date(crime["Report DateTime"]) }
// })

// function App(props) {

//     const parseCrimeData = props.crimeData.map((crime) => {
//         return { ...crime, "Report DateTime": new Date(crime["Report DateTime"]) }
//     })

//     console.log(parseCrimeData);

//     const uniqueCountry = [...new Set(props.crimeData.reduce((all, current) => {
//         return all.concat([current.MCPP]);
//       }, []))].sort();

//     let crimeName = "";
//     let getCrimeType = (crimeType) => {
//         crimeName = crimeType.value;
//     };

//     return (
//         <Router>
//             <header>
//                 {/* Navbar */}
//                 <NavbarR crimeData={props.parseCrimeData} />

//                 {/* Basic info and titles */}
//                 <section id="top">
//                     <img src="./img/seattle-skyline.jpg" alt="Seattle Space Needle and buildings"
//                         title="Image by Ally Laws from Pixabay" className="header-img" />
//                 </section>
//             </header>

//             <Routes>
//                 <Route path="/" element={<About />} />
//                 <Route path="/map" />
//                 <Route path="/table" element={<Feature parseCrimeData={parseCrimeData} crimeOptions={uniqueCountry}/>} />
//                 <Route path="/tips" />
//             </Routes>
//         </Router>
//     );
// }