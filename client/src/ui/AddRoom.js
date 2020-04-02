import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
//import './AddRoom.css';

class AddRoom extends Component {
  constructor() {
    super();
    this.state = {
      room_name: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({room_name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createRoom(this.state.room_name);
    this.setState({
      room_name: ''
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Row>
            <Col xs='5'>
              <Form.Control type="text" value={this.state.room_name} onChange={this.handleChange} placeholder="Enter a room name..." />
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