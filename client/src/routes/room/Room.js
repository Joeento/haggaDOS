import React, { Component } from 'react';

import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Viewer from '../../ui/Viewer';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaTrash, FaSyncAlt } from 'react-icons/fa';

import './Room.css';

import {
  withRouter
} from "react-router-dom";

class Room extends Component {

  refresh_interval = 0;

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      page: 0,
      room: null
    }

    this.updatePage = this.updatePage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.loadData();
    this.refresh_interval  = setInterval(this.loadData.bind(this), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.refresh_interval);
   }

  loadData() {
    axios.get('/api/room/' + this.state.id)
      .then(res => {
        const room = res.data.data;
        this.setState({
          room: room,
          page: room.page
        });
      });
  }

  updatePage(page_num) {
    axios.post('/api/room/' + this.state.id + '/page/' + page_num)
      .then(res => {
        const room = res.data.data;
        this.setState({ room });
      });
  }

  handleChange(event) {
    this.setState({page: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.updatePage(this.state.page);
  }

  render() {
    return (
      <div>
        <Row className='mb-3'>
          <Col xs='12'>
            <div className='float-left'>
              <h3>Room: {this.state.room != null ? this.state.room.name : 'N/A'}</h3>
            </div>
            <div className='float-right'>
              <Form inline onSubmit={this.handleSubmit}>
                <Form.Control className='page-number' value={this.state.page} onChange={this.handleChange} placeholder={this.state.room != null ? this.state.room.page : 0} /> &nbsp; / 128 &nbsp; <Button type="submit">Go</Button>
              </Form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Viewer room={this.state.room} updatePage={this.updatePage} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Room);
