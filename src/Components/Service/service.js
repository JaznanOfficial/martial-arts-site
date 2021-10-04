import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./service.css";

const Service = (props) => {
    const { img, name, EstablishedIn, EstablishedDate, style, shortDetails } = props.service;
    console.log(props.service.name);
    return (
        <div className="service-div">
            <Col>
                <Card className="service-single-card mb-5">
                    <Card.Img
                        variant="top"
                        src={img}
                        height="200px"
                        width="200px"
                        className="service-card-img"
                    />
                    <Card.Body>
                        <Card.Title className="text-light">
                            <h2>{name}</h2>
                        </Card.Title>
                        <Card.Text className="text-light">
                            <img src={EstablishedIn} alt="" width="50px" className="my-2" />
                            <h5><strong>Established Date:</strong> {EstablishedDate}</h5>
                            <h6><strong>Style/Weapon:</strong> {style}</h6> 
                            <Card.Footer>
                            <Link to='./accepted'><Button variant="outline-light">Get Admission</Button></Link>
                            </Card.Footer>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
