import React, { useState } from 'react';
import { SingleCard } from '../Card.js';
import { AddCard } from './AddCard.js';

const imagePaths = [
    "resource_img/Card2Img.jpg",
    "resource_img/crime_line.jpg",
    "resource_img/crime_prevention.jpg",
    "resource_img/crime-prevention.jpg",
    "resource_img/crime.jpg",
    "resource_img/handcuff.jpg",
    "resource_img/mic.png",
    "resource_img/police_line.jpg",
    "resource_img/report-crime.jpg",
    "resource_img/line.png"
];

export function Resources() {
    const [array, setArray] = useState([
        {
            imageSource: "img/crime-prevention.jpg",
            alt: "Crime Prevention sign",
            title: "Resource 1",
            description: "A website providing crime prevention services and tips in Seattle",
            link: "https://www.seattle.gov/police/crime-prevention",
        },
        {
            imageSource: "img/Card2Img.jpg",
            alt: "People huddling after a crime",
            title: "Resource 2",
            description: "This resource will lead you to the Seattle Crime Prevention Program",
            link: "https://www.ojp.gov/ncjrs/virtual-library/abstracts/community-crime-prevention-program-seattle-washington-exemplary",
        },
        {
            imageSource: "img/report-crime.jpg",
            alt: "Report a crime logo",
            title: "Resource 3",
            description: "A website that provides a crime reporting service and advice",
            link: "https://www.seattle.gov/police/need-help/online-reporting",
        },
        {
            imageSource: "img/Screen Shot 2023-01-30 at 6.03.01 PM.png",
            alt: "Do not cross yellow tape",
            title: "Resource 4",
            description: "This resource shows multiple ways to save yourself from a crime",
            link: "https://www.seattleu.edu/safety/crime-prevention/",
        }
    ]);
    
    function addResource(link, description) {
        setArray([...array, {
            imageSource: imagePaths[Math.floor(Math.random()*imagePaths.length)],
            alt: "",
            title: "Resource " + (array.length + 1),
            description,
            link,
        }]);
    }
    // const cardInfo = [
    //     {
    //         imageSource: "img/crime-prevention.jpg",
    //         alt: "Crime Prevention sign",
    //         title: "Resource 1",
    //         description: "A website providing crime prevention services and tips in Seattle",
    //         link: "https://www.seattle.gov/police/crime-prevention",
    //     },
    //     {
    //         imageSource: "img/Card2Img.jpg",
    //         alt: "People huddling after a crime",
    //         title: "Resource 2",
    //         description: "This resource will lead you to the Seattle Crime Prevention Program",
    //         link: "https://www.ojp.gov/ncjrs/virtual-library/abstracts/community-crime-prevention-program-seattle-washington-exemplary",
    //     },
    //     {
    //         imageSource: "img/report-crime.jpg",
    //         alt: "Report a crime logo",
    //         title: "Resource 3",
    //         description: "A website that provides a crime reporting service and advice",
    //         link: "https://www.seattle.gov/police/need-help/online-reporting",
    //     },
    //     {
    //         imageSource: "img/Screen Shot 2023-01-30 at 6.03.01 PM.png",
    //         alt: "Do not cross yellow tape",
    //         title: "Resource 4",
    //         description: "This resource shows multiple ways to save yourself from a crime",
    //         link: "https://www.seattleu.edu/safety/crime-prevention/",
    //     }
    // ];
    
    return (
        <>
            <section id="top">
                <img src={"img/seattle-skyline.jpg"} alt="Seattle Space Needle and buildings"
                    title="Image by Ally Laws from Pixabay" className="header-img" />
            </section>
            <div className="container">
                <div className="row">
                    <section id="section-0" className="container col-12">
                        <div className="jumbotron jumbotron-fluid bg-dark text-light">
                            <h1 className="display-4 ">Resources and Tips</h1>
                            <p className="lead">Outside resources you can refer to have a safer life.</p>
                        </div>
                    </section>
                    <AddCard addResource={addResource}/>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {array.map((card) => <SingleCard key={card.link} cardInfo={card} />)}
                </div>
            </div>
        </>
    )
}