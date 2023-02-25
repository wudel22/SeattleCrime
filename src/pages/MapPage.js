import React from 'react';
import { Map } from '../Map.js';

export function MapPage() {
    return (
        <>
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
                <p>Developer note: The following are static placeholders for the map that will be implemented.</p>
                {/* <Map /> */}
            </section>

            <section id="section-3" className="container">

            </section>
        </>
    );
}
