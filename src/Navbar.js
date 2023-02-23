import React from 'react';

export function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-secondary fixed-top">
            <a className="navbar-brand" href="index.html">Seattle Crime 🔎</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="map.html">Map</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="table-page.html">Table Analysis</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="resource-tip.html">Resources and Tips</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}