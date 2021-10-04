import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './BottomBody.css'

const BottomBody = (props) => {
    console.log(props.service.name);
    const{name,img,EstablishedIn} = props.service
    return (
        <div className='bottom-body'>
            
            
            
  
    <Col>
      <Card className='single-card'>
        <Card.Img variant="top" src={img} height='200px' width='200px' className='card-img' />
        <Card.Body>
          <Card.Title className='text-light'>{name}</Card.Title>
          <Card.Text>
            <img src={EstablishedIn} alt="" width='100px' />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default BottomBody;