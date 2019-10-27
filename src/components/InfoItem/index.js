import React from 'react';
import { Item } from './styles';

export default function InfoItem(props) {
  return (
    <Item>
      <span> {props.fieldKey} </span>
      <p> {props.fieldValue} </p>
    </Item>
  );
}
