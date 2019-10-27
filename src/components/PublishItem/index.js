/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { ListItem } from './styles';

const pubStates = [
  {
    state: 'criada',
    color: '#99a2ff',
  },
  {
    state: 'atualizada',
    color: '#fffbab',
  },
  {
    state: 'removida',
    color: '#ff7373',
  },
  {
    state: 'enviada',
    color: '#ff96f1',
  },
  {
    state: 'respondida',
    color: '#a9ff94',
  },
];

export default class PublishItem extends Component {
  state = {
    currentState: {
      ...pubStates[1],
    },
    requestId: '',
    requestTitle: 'Publicação N',
    redirect: false,
  };

  setRedirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { currentState, redirect, requestId, requestTitle } = this.state;

    if (redirect) return <Redirect to={`/pautas/${requestId}`} />;

    return (
      <ListItem stateColor={currentState.color} onClick={this.setRedirect}>
        <strong> {requestTitle} </strong>
        <p> foi {currentState.state} </p>
      </ListItem>
    );
  }
}
