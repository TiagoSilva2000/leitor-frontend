import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Container} from '../../components/Container'
import PageSwapper from '../../components/PageSwapper'
import PagesIndex from '../../components/PagesIndex'
import {PubWrapper, Wrapper} from './styles'
import {GenButton, ButtonWrapper} from '../../components/GenButton/styles'
import {DefaultFlexDiv} from '../../components/DefaultFlexDiv/styles'
import { Redirect } from 'react-router-dom'
import PopupForm from '../../components/PopupForm'

const obj1 = {
  name: "Chicote na cabeça e pulo de peão.",
  status: "Enviada",
  sentDate: "19/04/2000",
  answerDate: ""
};
const obj2 = {
  name: "Homem de braços com a espada na mão",
  status: "Respondida",
  sentDate: "19/04/2000",
  answerDate: "15/12/2015"
};
const obj3 = {
  name: "Arroz e trigo na salada com feijão",
  status: "Deletada",
  sentDate: "19/04/2000",
  answerDate: "15/12/2015"
};

const obj4 = {
  name: "Pickles com Manteiga no meu pão",
  status: "Criada",
  sentDate: "19/04/2000",
  answerDate: "15/12/2015"
};
const obj5 = {
  name: "O Nome de Ana foi João",
  status: "Atualizada",
  sentDate: "19/04/2000",
  answerDate: "15/12/2015"
};

export default class Publish extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pubsArray: [obj1, obj2, obj3],
      pagesNum: 10,
      currPage: 1,
      redirect: false,
      formSet: false
    }
  }

  setRedirect = (e) => { this.setState({redirect:true}) }

  doRedirect = () => {
    if (this.state.redirect)
      return <Redirect to="/perfil"/>
  }

  render() {
    const { pubsArray, pagesNum, formSet } = this.state;
    return (
      <Container bgColor="#abcbd1">
      {this.doRedirect()}
      <Wrapper borderColor="#ed5fad" flexDir="column" bgColor="#eeeeee" correctWidth="80%">
        <ButtonWrapper>
          <GenButton onClick={() => this.setRedirect()}> Perfil </GenButton>
          <GenButton disabled> Pautas </GenButton>
        </ButtonWrapper>
          <PubWrapper>
            <ul>
              <li>
                <span> Título </span>
                <span> Status </span>
                <span> Criada </span>
                <span> Respondida </span>
                <span><button type="button" onClick={() => this.setState({formSet:!formSet})}>+</button></span>
                {/* <span style={{visibility:"hidden"}}> Título </span> */}
              </li>
              {pubsArray.map((pubObj) => (
                <li key={pubObj.name} status="yellow">
                  <span> {pubObj.name} </span>
                  <span> {pubObj.status} </span>
                  <span> {pubObj.sentDate ? pubObj.sentDate : "-"} </span>
                  <span> {pubObj.answerDate ? pubObj.answerDate : "-"} </span>
                  <span><Link to="/pautas/sobre"> Ver Mais! </Link></span>
                </li>
              ))}
            </ul>
          </PubWrapper>
          <PopupForm formSet={formSet}/>
        <PagesIndex  nPages={pagesNum} currPage={this.state.currPage}/>
        </Wrapper>
      </Container>
    );
  }
};