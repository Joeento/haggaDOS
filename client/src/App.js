import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

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
  }

  componentDidMount() {
    axios.get('/api/rooms')
      .then(res => {
        const rooms = res.data.data;
        this.setState({ rooms });
      })
  }

  render() {
    return (
      <>
        <NavigationBar />
        <Container>
          <Card className="mt-4">
            <Card.Header>Rooms</Card.Header>
            <Card.Body>
              <RoomList rooms={this.state.rooms} />
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default App;
