import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function AddCard(props) {
    const linkInput = useRef(null);
    const descriptionInput = useRef(null);
    const addResource = props.addResource;

    function submitCallback(){
        const link = linkInput.current.value;
        const description = descriptionInput.current.value;
        addResource(link, description);
    }

    return (
        <div className="col-12 d-flex">
            <div className="col p-0 cardShadow">
            <Card>
                <Card.Body>
                    <Card.Title className="text-danger">Submit a Resource</Card.Title>
                    <form className="form-group text-black">
                        <label htmlFor="resource">Resource Link:</label>
                        <input type="text" className="form-control mb-2" id="resource" placeholder="Enter resource link" ref={linkInput}></input>
                        <input type="text" className="form-control" id="resourceDescription" placeholder="Enter resource description " ref={descriptionInput}></input>
                    </form>
                    <Button type="Submit" className="btn btn-dark" onClick={submitCallback}>Submit</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
}