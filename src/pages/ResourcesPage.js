import React from 'react';

export function Resources() {
    return (
        <>
            <section id="top">
                <img src={"img/seattle-skyline.jpg"} alt="Seattle Space Needle and buildings"
                    title="Image by Ally Laws from Pixabay" className="header-img" />
            </section>
            <section id="section-0" className="container">
                <div className="jumbotron jumbotron-fluid bg-dark text-light">
                    <h1 className="display-4 ">Resources and Tips</h1>
                    <p className="lead">Outside resources you can refer to have a safer life.</p>
                </div>
            </section>

            <div className="container">
                <div className="row">

                    <div className="col col-md-6 col-sm-12 col-xl-3 d-flex">
                        <div className="card mb-4 mt-4 shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col col-sm-auto col-xl-12">
                                        <img className="pb-3 img-fluid" src={"img/crime-prevention.jpg"} alt="Crime Prevention" />
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title text-danger">Resource 1</h2>
                                        <p className="card-text text-dark">A website providing crime prevention services and tips in Seattle</p>
                                        <a href="https://www.seattle.gov/police/crime-prevention" className="btn btn-dark">Check out this Resource</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-6 col-sm-12 col-xl-3 d-flex">
                        <div className="card mb-4 mt-4 shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col col-sm-auto col-xl-12">
                                        <img className="pb-3 img-fluid" src={"img/Card2Img.jpg"} alt="Seattle Crime Prevention" />
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title text-danger">Resource 2</h2>
                                        <p className="card-text text-dark"> This resource will lead you to the Seattle Crime Prevention Program</p>
                                        <a href="https://www.ojp.gov/ncjrs/virtual-library/abstracts/community-crime-prevention-program-seattle-washington-exemplary"
                                            className="btn btn-dark">Check out this Resource</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-6 col-sm-12 col-xl-3 d-flex">
                        <div className="card mb-4 mt-4 shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col col-sm-auto col-xl-12">
                                        <img className="pb-3 img-fluid" src={"img/report-crime.jpg"} alt="Crime Reporting" />
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title text-danger">Resource 3</h2>
                                        <p className="card-text text-dark">A website that provides a crime reporting service and advice</p>
                                        <a href="https://www.seattle.gov/police/need-help/online-reporting" className="btn btn-dark">Check out this Resource</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-6 col-sm-12 col-xl-3 d-flex">
                        <div className="card mb-4 mt-4 shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col col-sm-auto col-xl-12">
                                        <img className="pb-3 img-fluid" src={"img/Screen Shot 2023-01-30 at 6.03.01 PM.png"} alt="" />
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title text-danger">Resource 4</h2>
                                        <p className="card-text text-dark">This resource shows multiple ways to save yourself from a crime</p>
                                        <a href="https://www.seattleu.edu/safety/crime-prevention/" className="btn btn-dark">Check out this Resource</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col col-md-6 col-sm-12 col-xl-3 d-flex">
                        <div className="card mb-4 mt-4 col-sm shadow">
                            <div className="card-body">
                                <h2 className="card-title text-danger">Submit a Resource</h2>
                                <form>
                                    <div className="form-group">
                                        <label for="resource">Resource Link:</label>
                                        <input type="text" className="form-control" id="resource" placeholder="Enter resource link" />
                                    </div>
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div> */}

                    <div className="col col-md-6 col-sm-12 col-xl-3 d-flex">
                        <div className="card mb-4 mt-4 col-sm shadow">
                            <div className="card-body">
                                <h2 className="card-title text-danger">List of Websites</h2>
                                <ul className="list-group">
                                    <li className="list-group-item"><a href="https://www.seattle.gov/police/crime-prevention">Seattle Police Department - Crime Prevention</a></li>
                                    <li className="list-group-item"><a href="https://www.seattle.gov/police/need-help/preventing-crime">Seattle Police Department - Preventing Crime</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}