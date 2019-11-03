/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Container } from '../../components/Container';
import Picture from '../../Images/profile.jpg';
import { ProfilePic, ImageBox, ProfileList, Wrapper} from './styles';
import InfoItem from '../../components/InfoItem';
import {DefaultFlexDiv} from '../../components/DefaultFlexDiv/styles'
import {ButtonWrapper, GenButton} from '../../components/GenButton/styles'
import { Redirect } from 'react-router-dom'


export default class Profile extends Component {
  state = {
    userType: '',
    redirect: false
  };

  setRedirect = (e) => { this.setState({redirect:true}) }

  doRedirect = () => {
    if (this.state.redirect)
      return <Redirect to="/pautas"/>
  }


  render() {
    const { userType } = this.state;
    return (
      <Container bgColor="inherit">
        {this.doRedirect()}
        <Wrapper
          borderColor="#ed5fad"
          flexDir="column"
          correctWidth="70%"
          bgColor="#eeeeee">
          <ButtonWrapper style={{maxHeight:"70px"}}>
            <GenButton disabled> Perfil </GenButton>
            <GenButton onClick={() => this.setRedirect()}> Pautas </GenButton>
          </ButtonWrapper>
          <DefaultFlexDiv correctWidth="100%">
            <ImageBox>
              <ProfilePic src={Picture} />
              <button type="button"> Alterar Perfil </button>
              <p>
                Pautas Enviadas: <span>{88}</span>
                <br/>
                Pautas Respondidas: <span id="answered">{55}</span>
              </p>
            </ImageBox>
            <ProfileList>
              <InfoItem fieldKey="Usuário" fieldValue="ttiago" />
              <InfoItem fieldKey="Email" fieldValue="tiago10moreira1@gmail.com" />
              <InfoItem fieldKey="Senha" fieldValue="*********" />
            </ProfileList>
          </DefaultFlexDiv>
        </Wrapper>
      </Container>
    );
  }
}

{/*
<ConfigsMenu>
  <span> Feed </span>
  <ul>
    <PublishItem state="enviada" stateColor="#ff96f1"/>
    <PublishItem />
    <PublishItem />
    <PublishItem />
    <PublishItem />
    <PublishItem />
  </ul>
</ConfigsMenu> */}
