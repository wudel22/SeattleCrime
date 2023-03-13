import React, { useEffect, useState } from 'react';
import { SingleCard } from '../Card.js';
import { AddCard } from '../AddCard.js';
import { addCard, getCards, removeCard } from "../firebase.js";

//An array that stores random images to generate for every new card the user adds
const imagePaths = [
    {
        img: "resource_img/Card2Img.jpg",
        alt: "People huddling after disaster"
    },
    {
        img: "resource_img/crime_line.jpg",
        alt: "Keep out tape"
    },
    {
        img: "resource_img/crime_prevention.jpg",
        alt: "Crime prevention logo"
    },
    {
        img: "resource_img/crime-prevention.jpg",
        alt: "Crime prevention sign"
    },
    {
        img: "resource_img/crime.jpg",
        alt: "Crime decorated text"
    },
    {
        img: "resource_img/handcuff.jpg",
        alt: "Handcuffs"
    },
    {
        img: "resource_img/mic.png",
        alt: "Microphones"
    },
    {
        img: "resource_img/police_line.jpg",
        alt: "Police do not cross line"
    },
    {
        img: "resource_img/report-crime.jpg",
        alt: "Report a crime logo"
    },
    {
        img: "resource_img/line.png",
        alt: "Do not cross yellow tape"
    }
];

//A function that sorts the cards by number/title
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
            //console.log(sortedCards);
            setArray(sortedCards);
        });
    }, []);
    
    //A function that adds new cards to the firebase 
    function addResource(link, description) {
        let randy = Math.floor(Math.random() * imagePaths.length);
        const newCard = {
            imageSource: imagePaths[randy].img,
            alt: imagePaths[randy].alt,
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
                    <AddCard addResource={addResource} />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {array.map((card) => <SingleCard key={card.link} cardInfo={card} deleteCard={deleteCard} />)}
                </div>
            </div>
        </>
    )
}