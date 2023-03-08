import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function AddCard(props) {
    const cardInfo = props.cardInfo;

    return (
        <div className="col-12 d-flex">
            <div className="col p-0 cardShadow">
            <Card>
                <Card.Body>
                    <Card.Title className="text-danger">Submit a Resource</Card.Title>
                    <form className="form-group text-black">
                        <label htmlFor="resource">Resource Link:</label>
                        <input type="text" className="form-control" id="resource" placeholder="Enter resource link"></input>
                        <input type="text" className="form-control" id="resourceDescription" placeholder="Enter resource description"></input>
                    </form>
                    <Button type="Submit" className="btn btn-dark">Submit</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
}