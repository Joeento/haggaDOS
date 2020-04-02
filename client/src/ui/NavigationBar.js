import React, { Component } from 'react';
//import { withRouter } from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaTorah } from 'react-icons/fa';

import './NavigationBar.css';

class NavigationBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar bg="black" expand="lg" variant="dark" className="mb-4" >
        <Navbar.Brand href="#">
          <FaTorah className='mr-2' size="1.6em" />HaggaDOS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto" activeKey={false}>
            <Nav.Link>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;