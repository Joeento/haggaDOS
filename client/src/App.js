import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import AddRoom from './ui/AddRoom';
import RoomList from './ui/RoomList';
import NavigationBar from './ui/NavigationBar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    }

    this.createRoom = this.createRoom.bind(this);
  }

  componentDidMount() {
    axios.get('/api/rooms')
      .then(res => {
        const rooms = res.data.data;
        this.setState({ rooms });
      });
  }

  createRoom(room_name) {
    const self = this;
    axios.post('/api/rooms', {name: room_name})
      .then(res => {
        const new_room = res.data.data;

        let rooms = self.state.rooms;
        rooms.push(new_room);
        self.setState({ rooms });
      });
  }

  render() {
    return (
      <>
        <NavigationBar />
        <Container>
          <Card className="mt-4">
            <Card.Header>Rooms</Card.Header>
            <Card.Body>
              <AddRoom createRoom={this.createRoom}/>
              <RoomList rooms={this.state.rooms} />
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default App;
