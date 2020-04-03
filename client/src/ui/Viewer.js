import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

//import './Viewer.css';

class Viewer extends Component {
  constructor() {
    super();
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  prevPage() {
    this.props.updatePage(this.props.room.page - 1);
  }

  nextPage() {
    this.props.updatePage(this.props.room.page + 1);
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <Row>
            <Col xs='12'>
              <Image width='100%' src={window.location.origin + '/haggadah/' + (this.props.room != null ? this.props.room.page : 0) + '.png'} rounded />
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col xs='6'>
              <Button width='100%' className='btn-block' variant="primary" onClick={this.prevPage}><FaChevronLeft /></Button>
            </Col>
            <Col xs='6'>
              <Button width='100%' className='btn-block' variant="primary" onClick={this.nextPage}><FaChevronRight /></Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Viewer;