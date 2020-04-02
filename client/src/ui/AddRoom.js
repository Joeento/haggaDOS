import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
//import './AddRoom.css';

class AddRoom extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Row>
            <Col xs='5'>
              <Form.Control type="text" placeholder="Enter a room name..." />
            </Col>
            <Col xs='1'>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    );
  }
}

export default AddRoom;