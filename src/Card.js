import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function SingleCard(props) {
    const cardInfo = props.cardInfo;
    const deleteCard = props.deleteCard;

    function deleteButtonAction() {
        deleteCard(cardInfo.link);
    }

    return (
        <div className="col col-md-6 col-sm-12 col-xl-3 d-flex">
            <div className="card mb-4 mt-4 cardShadow">
                <Card className='card'>
                    <Button className="deleteButton p-0" onClick={deleteButtonAction}>
                        <img src="img/deleteicon.png" className="deleteImage" />
                    </Button>
                    <Card.Img variant="top" src={cardInfo.imageSource} alt={cardInfo.alt} />
                    <Card.Body>
                        <Card.Title className="text-danger">{cardInfo.title}</Card.Title>
                        <Card.Text className="text-dark">
                            {cardInfo.description}
                        </Card.Text>
                        <Button href={cardInfo.link} className="btn btn-dark" target='_blank'>Check out this Resource</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}