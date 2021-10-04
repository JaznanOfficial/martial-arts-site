import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])
    return (
        <div className='services-div'>
            <h1>Our all Services</h1>
            <div className='my-5'>
            <Row xs={1} md={3} className="g-5">
            {
                services.map(service => <Service
                    service={service}
                    key={service.name}
                ></Service>)
            }
            </Row>
            </div>
            
        </div>
    );
};

export default Services;