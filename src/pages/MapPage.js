import React from 'react';
import { Map } from '../Map.js';

export function MapPage(props) {
    return (
        <>
            <section id="top">
                <img src={"img/pike.jpg"} alt="Seattle pier"
                    title="Image by David Mark from Pixabay" className="header-img"/>
            </section>
            <section id="section-0" className="container">
                <div className="jumbotron jumbotron-fluid bg-dark text-light">
                    <h1 className="display-4 ">Seattle Crimes Map</h1>
                    <p className="lead">A visual representation of crime data.</p>
                </div>
            </section>

            <section id="section-1" className="container">
                <p>Check the map below for a visual representation of the crimes that happen in the Seattle area.</p>
            </section>

            <section id="section-2" className="container">
                <p>Developer note: The filters are currently working (they print to the developer console. For the next draft, we plan to get the filtered data onto the map as markers).</p>
            </section>
            <Map crimeData={props.crimeData} />
            <section id="section-3" className="container">

            </section>
        </>
    );
}
