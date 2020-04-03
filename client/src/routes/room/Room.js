import React, { Component } from 'react';

import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Viewer from '../../ui/Viewer';

import {
  withRouter
} from "react-router-dom";

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      room: null
    }

    this.updatePage = this.updatePage.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    axios.get('/api/room/' + this.state.id)
      .then(res => {
        const room = res.data.data;
        this.setState({ room });
      });
  }

  updatePage(page_num) {
    axios.post('/api/room/' + this.state.id + '/page/' + page_num)
      .then(res => {
        const room = res.data.data;
        this.setState({ room });
      });
  }

  render() {
    return (
      <div>
        <h3>Room: {this.state.room != null ? this.state.room.name : 'N/A'}</h3>
        <Viewer room={this.state.room} updatePage={this.updatePage} />
      </div>
    );
  }
}

export default withRouter(Room);
