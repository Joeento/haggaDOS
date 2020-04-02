import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import { LinkContainer } from 'react-router-bootstrap';
//import './RoomList.css';

class RoomList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ListGroup>
        {this.props.rooms.map(function(room) {
          return (
            <LinkContainer key={room._id} to={'/room/' + room._id}>
              <ListGroup.Item action>
                {room.name}
              </ListGroup.Item>
            </LinkContainer>
          );
        })}
      </ListGroup>
    );
  }
}

export default RoomList;