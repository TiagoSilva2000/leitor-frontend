import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main/index';
import Publishes from './pages/Publishes/index';
import Profile from './pages/Profile/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/profile" component={Profile} />
        <Route path="/pautas" component={Publishes} />
      </Switch>
    </BrowserRouter>
  );
}
