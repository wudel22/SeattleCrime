import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function SingleCard(props) {
    const cardInfo = props.cardInfo;

    return (
        <div className="col col-md-6 col-sm-12 col-xl-3 d-flex">
            <div className="card mb-4 mt-4 shadow">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cardInfo.imageSource} alt={cardInfo.alt} />
                    <Card.Body>
                        <Card.Title className="text-danger">{cardInfo.title}</Card.Title>
                        <Card.Text className="text-dark">
                            {cardInfo.description}
                        </Card.Text>
                        <Button href={cardInfo.link} className="btn btn-dark">Check out this Resource</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}