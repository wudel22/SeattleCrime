import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { NavbarR } from './Navbar.js'
import { AboutPage } from './pages/About';
import { MapPage } from './pages/MapPage'
import { Feature } from './pages/TablePage';
import { Resources } from './pages/ResourcesPage'
import { NotFound } from './pages/NotFound'

function App(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(
                "https://data.seattle.gov/resource/tazs-3rd5.json?$select=report_datetime,mcpp,offense_parent_group,offense,longitude,latitude,offense_id&$order=report_datetime DESC&$limit=1000"
            ).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    throw new Error("Bad response from server");
                  }
                  return response;
            }).catch((error) => {
                console.log(error);
            });
            const parsed = await response.json();
            setData(parsed);
        })();
    }, []);

    const uniqueCounty = ['ALASKA JUNCTION', 'ALKI', 'BALLARD NORTH', 'BALLARD SOUTH', 'BELLTOWN', 'BITTERLAKE', 'BRIGHTON/DUNLAP', 'CAPITOL HILL', 'CENTRAL AREA/SQUIRE PARK', 'CHINATOWN/INTERNATIONAL DISTRICT', 'CLAREMONT/RAINIER VISTA', 'COLUMBIA CITY', 'COMMERCIAL DUWAMISH', 'COMMERCIAL HARBOR ISLAND', 'DOWNTOWN COMMERCIAL', 'EASTLAKE - EAST', 'EASTLAKE - WEST', 'FAUNTLEROY SW', 'FIRST HILL', 'FREMONT', 'GENESEE', 'GEORGETOWN', 'GREENWOOD', 'HIGH POINT', 'HIGHLAND PARK', 'HILLMAN CITY', 'JUDKINS PARK/NORTH BEACON HILL', 'LAKECITY', 'LAKEWOOD/SEWARD PARK', 'MADISON PARK', 'MADRONA/LESCHI', 'MAGNOLIA', 'MID BEACON HILL', 'MILLER PARK', 'MONTLAKE/PORTAGE BAY', 'MORGAN', 'MOUNT BAKER', 'NEW HOLLY', 'NORTH ADMIRAL', 'NORTH BEACON HILL', 'NORTH DELRIDGE', 'NORTHGATE', 'PHINNEY RIDGE', 'PIGEON POINT', 'PIONEER SQUARE', 'QUEEN ANNE', 'RAINIER BEACH', 'RAINIER VIEW', 'ROOSEVELT/RAVENNA', 'ROXHILL/WESTWOOD/ARBOR HEIGHTS', 'SANDPOINT', 'SLU/CASCADE', 'SODO', 'SOUTH BEACON HILL', 'SOUTH DELRIDGE', 'SOUTH PARK', 'UNIVERSITY', 'UNKNOWN', 'WALLINGFORD'];

    return (
        <>
            <NavbarR />
            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/map" element={<MapPage crimeData={data} />} />
                <Route path="/table" element={<Feature parseCrimeData={data} crimeOptions={uniqueCounty}/>} />
                <Route path="/tips" element={<Resources />}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <footer>
                <div className="container pb-3 pt-3 d-flex flex-column min-vh-10">
                    <p>&copy; 2023 Ashley Mochizuki, Hannah Wee, Nicole Herman, Delaney Wu. Data from the <a className="link-w" target="_blank" rel="noreferrer" href="https://www.seattle.gov/police/information-and-data/data/public-data-sets">Seattle Police Department's public crime data set</a>.</p>
                </div>
            </footer>
        </>
    );
}
export default App;