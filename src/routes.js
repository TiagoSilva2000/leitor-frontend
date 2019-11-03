import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main/index';
import Publishes from './pages/Publishes/index';
import Profile from './pages/Profile/index';
import LogAccount from './pages/LogAccount/index'
import SeeMore from './pages/SeeMore/index'
import ChangeProfile from './pages/ChangeProfile/index'
import CreateRequest from './pages/CreateRequest/index'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/perfil" component={Profile} />
        <Route exact path="/perfil/mudar" component={ChangeProfile}/>
        <Route exact path="/pautas" component={Publishes} />
        <Route path="/pautas/sobre" component={SeeMore}/>
        <Route path="pautas/criar" component={CreateRequest}/>
        <Route path="/conta" component={LogAccount} />
      </Switch>
    </BrowserRouter>
  );
}
