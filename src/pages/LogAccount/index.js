import React, {Component} from 'react'
import {GenButton} from '../../components/GenButton/styles'
import {Container} from '../../components/Container/index'
import {InputForm} from '../../components/InputForm/styles'
import { FormDiv, ButtonHolder, FormWrapper, AccountContainer } from './styles';
import SiteHeader from '../../components/SiteHeader';


export default class LogAccounnt extends Component {
  constructor () {
    super ();
    this.state = {
      logMode: false, // 0 for normal users, 1 for redactors.
      login: true
    }
  }

  changeToRedactor = () => {
    const newLog = !this.state.logMode;
    this.setState({logMode:newLog})
  }

  render () {
    const {logMode, login} = this.state;
    return (
    <Container>
      <SiteHeader/>
      <AccountContainer>
        <FormWrapper>
          <ButtonHolder>
            <GenButton className="lineBreaker" type="button" onClick={() => this.changeToRedactor()}> Redator</GenButton>
            <GenButton type="button" onClick={() => this.setState({login:true})}> Login </GenButton>
            <GenButton type="button" onClick={() => this.setState({login:false})}> Signup </GenButton>
          </ButtonHolder>
          <FormDiv>
            {login ?
              <h2> Login </h2> :
              <h2> Sigup </h2>
            }
            <form action="" method="post">
              {!login &&
              <>
                <InputForm inputColor="#ffffff">
                  <p> Nome Completo: </p>
                  <input type="text" name="name" placeholder="Nome"></input>
                </InputForm>
                <InputForm inputColor="#ffffff">
                  <p> Nome de Usuário: </p>
                  <input type="text" name="username" placeholder="Username"></input>
                </InputForm>
              </>
              }
              <InputForm inputColor="#ffffff">
                <p> Email: </p>
                <input type="text" name="name" placeholder="Email"></input>
              </InputForm>
              <InputForm inputColor="#ffffff">
                <p> Senha: </p>
                <input type="password" name="pass" placeholder="Senha"></input>
              </InputForm>
              {!login &&
              <>
                <InputForm inputColor="#ffffff">
                  <p> Confirmação de Senha: </p>
                  <input type="password" name="passConf" placeholder="Confirmação"></input>
                  <br/>
                </InputForm>
              </>
              }
              {logMode &&
              <>
                <InputForm inputColor="#ffffff">
                  <p> Código de Identificação: </p>
                  <input type="text" name="redacID" placeholder="Código de Redator"></input>
                  <br/>
                </InputForm>
              </>
              }
              <br/>
              <GenButton type="submit"> Enviar </GenButton>
            </form>
          </FormDiv>
        </FormWrapper>
      </AccountContainer>
    </Container>
    )
  }
}