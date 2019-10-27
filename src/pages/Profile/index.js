/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Container } from '../../components/Container';
import PageSwapper from '../../components/PageSwapper';
import Picture from './profile.jpg';
import { ProfilePic, ConfigsMenu, ImageBox, ProfileList, Row } from './styles';
import PublishItem from '../../components/PublishItem/index';
import InfoItem from '../../components/InfoItem';

export default class Profile extends Component {
  state = {
    userType: '',
  };

  render() {
    const { userType } = this.state;
    console.log(userType);
    return (
      <Container>
        <Row>
          <ImageBox>
            <PageSwapper />
            <ProfilePic src={Picture} />
            <button type="button"> Trocar Perfil </button>
            <button type="button"> Remover Perfil </button>
          </ImageBox>

          <ProfileList>
            <InfoItem fieldKey="Email" fieldValue="tiago10moreira1@gmail.com" />
            <InfoItem fieldKey="Usuario" fieldValue="ttiago" />
            <InfoItem fieldKey="Senha" fieldValue="*********" />
            <InfoItem fieldKey="Publicações Enviadas" fieldValue="55" />
            <InfoItem fieldKey="Publicações Respondidas" fieldValue="10" />
          </ProfileList>
        </Row>

        {/* <Row> */}
        <ConfigsMenu>
          <span> Feed </span>
          <ul>
            <PublishItem />
            <PublishItem />
            <PublishItem />
            <PublishItem />
            <PublishItem />
            <PublishItem />
          </ul>
        </ConfigsMenu>
        {/* </Row> */}
      </Container>
    );
  }
}
