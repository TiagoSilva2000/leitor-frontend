import React, {Component} from 'react'
import {InputForm} from '../InputForm/styles'
import { FormPopup } from './styles';
import {GenButton, ButtonWrapper} from '../GenButton/styles'

export default class PopupForm extends Component {
  constructor () {
    super();
    this.state = {
      set: false
    }
  }
  render () {
    return (
      <InputForm>
        <FormPopup currDisplay={this.props.formSet}>
          <h3> Enviar Pauta </h3>
          <label htmlFor="publishName">Título</label>
          <input type="text" placeholder="Título da Pauta" name="publishName"></input>
          <label htmlFor="publishDescription"> Descrição </label>
          <textarea name="publishDescription" rows="10" cols="30"></textarea>
          <input type="file" name="chosenFile"
                accept="file_extension|image/*|application/pdf">
          </input>
          <GenButton type="submit"> Enviar!</GenButton> 
        </FormPopup>
      </InputForm>
    );
  }
}
  {/* <button
  onClick={() => this.setState({set:!this.state.set})}
  type="button"> Click me!</button> */}