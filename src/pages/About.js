import React from 'react';


export function AboutPage() {
    return (
        <>
            <header id="top">
                <img src={"img/seattle-skyline.jpg"} alt="Seattle Space Needle and buildings"
                    title="Image by Ally Laws from Pixabay" className="header-img"/>
            </header>

            <section id="section-0" className="container">
                <div className="jumbotron jumbotron-fluid bg-dark">
                    <h1 className="display-4">About the Project: Seattle Crime 🔎 </h1>
                    <p className="lead">by: Hannah Wee, Ashley Mochizuki, Nicole Herman, Delaney Wu</p>
                </div>
            </section>

            <div id="sec-1" className="mt-3 pb-3">

                <div className="bg-secondary">

                    <section id="section-1" className="container mt-3 pb-3">
                        <h2 className="pt-3 pb-3">Problem Description</h2>
                        <p className="pt-3 pb-3">For our project, we decided to focus on the domain of crime rates in Seattle,
                            especially the U-District area where we find a lot of college students living either alone or with other
                            roommates. Our general topic/question for this project is: <mark className="highlight">What is the
                                relationship between Seattle locations and crime rates?</mark> An information technology problem for
                            crime rates in Seattle includes rare real-time alerts and authenticating crimes that alerts students
                            about crimes that happened around campus areas. There are apps and websites that address crimes around
                            people’s neighborhood, such as <a href="https://citizen.com/" className="link-w">Citizen</a>, <a
                                href="https://spotcrime.com/" className="link-w">Spotcrime</a>, and others. These apps/websites uses
                            verified resources to input crime data into their apps, which allows citizens to be aware of incidents
                            happening around their area. However, there isn’t a specific app that allows college students to know
                            crimes happening live– especially at the University of Washington. Many students are alerted through
                            their emails and text messages by UW alerts, but this is usually a few days after the crime has
                            happened. We want to figure out how to make this system better, by providing students a safer way to
                            alert crimes happening around campus.
                        </p>
                    </section>
                </div>
            </div>

            <section id="section-2" className="container mt-3 pb-3">
                <h2 className="pt-3 pb-3">Proposed Application</h2>
                <h3 id="section-2-1">Who are the users of the application?</h3>
                <p>The users are going to be mainly UW students and faculty, and residents in the Seattle area-- specifically,
                    in the U-District area. Through this app, users will be able to see past and current crimes within the
                    Seattle area and the time and location the crimes occurred. Minority groups who do not have access to the
                    news or UW Alerts might not have access to the crimes that occur within the Seattle area. With this app that
                    we create, they would be able to see and track which areas around Seattle are more dangerous so that they
                    might plan routes and activities accordingly. UW students and faculty leave campus at some point during the
                    day or their academic career at UW to explore and experience the Seattle area. Even with UW Alerts, the
                    students and faculty would be in danger if they are already in the area of crime. Thus the importance of our
                    app for students so they can <mark className="highlight">plan their travel times and routes accordingly. </mark>
                </p>

                <section className="pt-3 pb-3">
                    <h3 id="section-2-2">What will the users do with the web app?</h3>
                    <p>
                        The users will be able to utilize the interactive features so they can avoid streets that has high crime
                        especially when they are walking alone or at night.
                    </p>
                    <ul>
                        <li>The user can view the <mark className="highlight">map</mark> by zooming in and zooming out of the map to
                            specifically see the color-coded areas near where they are located.</li>
                        <li>The developers will organize and visualize crime datasets to <mark className="highlight">color-code
                            different areas</mark> in the city of Seattle to indicate which street or community has high or
                            low crime rates. </li>
                        <li>There will also be a <mark className="highlight">search feature</mark> to see specific communities
                            within the city of Seattle which can be convenient for users who are planning to go to certain
                            areas.</li>
                    </ul>
                </section>

                <section className="pt-3 pb-3">
                    <h3 id="section-2-3">What kind of information will the users be viewing?</h3>
                    <p>
                        The information users will be viewing will be the location and date of categorized crime information
                        through a map. The crime information will be first grouped into the location of the community or street.
                        Then depending on the number of crimes within 2008-present, it will be colored coded to indicate the
                        number of crimes. The crimes will also be categorized within the location so the users can also look at
                        how frequent is certain type of offense through the search feature. The <a
                            href="https://data.seattle.gov/Public-Safety/SPD-Crime-Data-2008-Present/tazs-3rd5"
                            className="link-w">SPD Crime Data: 2008-Present | City of Seattle Open Data portal</a> website provides
                        the csv files for crime information specifically in Seattle.
                    </p>
                </section>

                <section className="pt-3 pb-3">
                    <h3 id="section-2-4">How will using this app help to solve the problem?</h3>
                    <p>
                        There are many apps out there that allow citizens to be aware of crimes around them, and UW Alerts
                        alerts people about crimes in Seattle in real-time. Yet, there isn’t an existing platform that allows
                        users to see the details of past and current crimes that have occurred within a specific location. This
                        is where our application comes in. Our application will provide the specific locations and times of
                        crimes and will display them on a map to clearly show users exactly where they have occurred.
                    </p>
                </section>
            </section>

            <button type="button" className="btn btn-danger btn-floating btn-lg btn-back-to-top" aria-label="Back to Top">
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </button>
        </>
    );
}
