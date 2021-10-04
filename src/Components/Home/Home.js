import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import BottomBody from "../BottomBody/BottomBody";
import TopBody from "../TopBody/TopBody";
import "./Home.css";

const Home = () => {
    const [someServices, setSomeServices] = useState([]);
    useEffect(() => {
        fetch("./homePage.json")
            .then((res) => res.json())
            .then((data) => setSomeServices(data));
    }, []);
    return (
        <div className="home-div">
            <TopBody></TopBody>
            <h1>Our Some Services</h1>
            <h3>(See all of services in <span><strong>'services'</strong></span> tab)</h3>
            <div className='my-5'>
            <Row xs={1} md={4} className="g-5">
            {someServices.map((service) => (
                <BottomBody
                    service={service}
                    key={service.name}
                ></BottomBody>
            ))}
            </Row>
            </div>
        </div>
    );
};

export default Home;
