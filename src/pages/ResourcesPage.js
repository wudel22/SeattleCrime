import React, { useEffect, useState } from 'react';
import { SingleCard } from '../Card.js';
import { AddCard } from './AddCard.js';
import { addCard, getCards, removeCard } from "../firebase.js";

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
    const [array, setArray] = useState([]);

    useEffect(() => {
        getCards().then((cards) => {
            //console.log(cards);
            const sortedCards = cards.sort((a, b) => {
                return a.title < b.title ? -1
                    : a.title > b.title ? 1
                    : 0
            });
            console.log(sortedCards);
            setArray(sortedCards);
        });
    }, []);
    
    function addResource(link, description) {
        const newCard = {
            imageSource: imagePaths[Math.floor(Math.random()*imagePaths.length)],
            alt: "",
            title: "Resource " + (array.length + 1),
            description,
            link,
        };
        setArray([...array, newCard]);
        addCard(newCard);
    }

    function deleteCard(link) {
        removeCard(link);
        setArray(array.filter((card) => card.link !== link));
    }
    
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
                    {array.map((card) => <SingleCard key={card.link} cardInfo={card} deleteCard={deleteCard}/>)}
                </div>
            </div>
        </>
    )
}