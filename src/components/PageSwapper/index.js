import React from 'react';
import { Link } from 'react-router-dom';
import { List } from './styles';

export default function PageSwapper() {
  return (
    <List>
      <li>
        <Link to="/"> Perfil </Link>
      </li>
      <li>
        <Link to="/pautas"> Pautas </Link>
      </li>
    </List>
  );
}
