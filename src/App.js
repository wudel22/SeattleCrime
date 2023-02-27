import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { NavbarR } from './Navbar.js'
import { AboutPage } from './pages/About';
import { MapPage } from './pages/MapPage'
import { Feature } from './pages/TablePage';
import { Resources } from './pages/ResourcesPage'

function App(props) {
    // const crimeData = props.crimeData;
    const [data, setData] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(
                "https://data.seattle.gov/resource/tazs-3rd5.json?$select=report_datetime,mcpp,offense_parent_group,offense,longitude,latitude,offense_id&$order=report_datetime DESC&$limit=1000"
            );
            const parsed = await response.json();
            setData(parsed);
            // const parseCrimeData = parsed.map((crime) => {
            //     return { ...crime, "Report DateTime": new Date(crime["Report DateTime"]) }
            // })
            // setData(parseCrimeData);
        })();
    }, []);

    // const uniqueCounty = [...new Set(props.crimeData.reduce((all, current) => {
    //     return all.concat([current.MCPP]);
    // }, []))].sort();

    const uniqueCounty = ['ALASKA JUNCTION', 'ALKI', 'BALLARD NORTH', 'BALLARD SOUTH', 'BELLTOWN', 'BITTERLAKE', 'BRIGHTON/DUNLAP', 'CAPITOL HILL', 'CENTRAL AREA/SQUIRE PARK', 'CHINATOWN/INTERNATIONAL DISTRICT', 'CLAREMONT/RAINIER VISTA', 'COLUMBIA CITY', 'COMMERCIAL DUWAMISH', 'COMMERCIAL HARBOR ISLAND', 'DOWNTOWN COMMERCIAL', 'EASTLAKE - EAST', 'EASTLAKE - WEST', 'FAUNTLEROY SW', 'FIRST HILL', 'FREMONT', 'GENESEE', 'GEORGETOWN', 'GREENWOOD', 'HIGH POINT', 'HIGHLAND PARK', 'HILLMAN CITY', 'JUDKINS PARK/NORTH BEACON HILL', 'LAKECITY', 'LAKEWOOD/SEWARD PARK', 'MADISON PARK', 'MADRONA/LESCHI', 'MAGNOLIA', 'MID BEACON HILL', 'MILLER PARK', 'MONTLAKE/PORTAGE BAY', 'MORGAN', 'MOUNT BAKER', 'NEW HOLLY', 'NORTH ADMIRAL', 'NORTH BEACON HILL', 'NORTH DELRIDGE', 'NORTHGATE', 'PHINNEY RIDGE', 'PIGEON POINT', 'PIONEER SQUARE', 'QUEEN ANNE', 'RAINIER BEACH', 'RAINIER VIEW', 'ROOSEVELT/RAVENNA', 'ROXHILL/WESTWOOD/ARBOR HEIGHTS', 'SANDPOINT', 'SLU/CASCADE', 'SODO', 'SOUTH BEACON HILL', 'SOUTH DELRIDGE', 'SOUTH PARK', 'UNIVERSITY', 'UNKNOWN', 'WALLINGFORD'];

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
                <Route path="/map" element={<MapPage crimeData={data} testLocations={testLocations} />} />
                <Route path="/table" element={<Feature parseCrimeData={data} crimeOptions={uniqueCounty}/>} />
                <Route path="/tips" element={<Resources />}/>
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