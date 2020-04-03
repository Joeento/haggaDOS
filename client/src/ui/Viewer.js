import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
//import './AddRoom.css';

class Viewer extends Component {
  constructor() {
    super();
    this.state = {
      room_name: ''
    }
  }


  render() {
    return (
      <Card>
        <Card.Body>
          <Row>
            <Col xs='12'>
              <Image width='100%%' src={window.location.origin + '/haggadah/0.png'} rounded />
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col xs='6'>
              <Button width='100%' className='btn-block' variant="outline-primary"><FaChevronLeft /></Button>
            </Col>
            <Col xs='6'>
              <Button width='100%' className='btn-block' variant="outline-primary"><FaChevronRight /></Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Viewer;