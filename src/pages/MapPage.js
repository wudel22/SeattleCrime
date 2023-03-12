import React from 'react';
import { Map } from '../Map.js';

export function MapPage(props) {
    return (
        <>
            <section id="top">
                <img src={"img/pike.jpg"} alt="Seattle pier"
                    title="Image by David Mark from Pixabay" className="header-img" />
            </section>
            <section id="section-0" className="container">
                <div className="jumbotron jumbotron-fluid bg-dark text-light">
                    <h1 className="display-4 ">Seattle Crimes Map</h1>
                    <p className="lead">A visual representation of crime data.</p>
                </div>
            </section>

            <section id="section-1" className="container">
                <p>Check the map below for a visual representation of the crimes that happen in the Seattle area. The data is extracted from the last 1000 crimes that happened in Seattle.</p>
            </section>

            <section id="section-2" className="container">
                <p>Search for a crime group from the dropdown menu. Click on the red markers on the map to learn more about the crime that occurred in a particular location.</p>
            </section>
                <Map crimeData={props.crimeData} />
            <section id="section-3" className="container">

            </section>
        </>
    );
}
