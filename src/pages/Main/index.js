/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    userType: '',
  };

  render() {
    const { userType } = this.state;
    console.log(userType);
    return <h1> Hello, World</h1>;
  }
}
