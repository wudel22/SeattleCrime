import React from 'react';

export function NotFound() {
    return (
        <>
            <section id="top">
                <img src={"img/seattle-bus.jpg"} alt="Seattle bus"
                    title="Image by Josh Hild from Pixabay" className="header-img" />
            </section>
            <section id="section-0" className="container">
                <div className="jumbotron jumbotron-fluid bg-dark text-light">
                    <h1 className="display-4 ">404 Error</h1>
                    <p className="lead">Sorry, this page could not be found.</p>
                </div>
            </section>

        </>
    );
}