import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
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
            <ListGroup.Item action href="#link1">{room.name}</ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default RoomList;