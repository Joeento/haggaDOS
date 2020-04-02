import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import Home from './routes/home/Home';
import NavigationBar from './ui/NavigationBar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    }
  }

  render() {
    return (
      <Router>
        <NavigationBar />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
