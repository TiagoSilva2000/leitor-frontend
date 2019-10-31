import React from 'react'
import {Displayer, Logo, Title, Header, HeaderList} from './styles'
import LogoIMG from '../../Images/whaleLogo.png'
export default function SiteHeader() {

  return (
  <>
  <Displayer>
    <Logo src={LogoIMG} alt="Logo do Site"/>
    <Title> Leitor Pauteiro </Title>
    <br/>
  </Displayer>
  <Header>
    <HeaderList>
      <li><a href="https://www.google.com/">INÍCIO</a></li>
      <li><a href="https://www.google.com/">PUBLICAÇÕES</a></li>
      <li><a href="https://www.google.com/">SOBRE</a></li>
    </HeaderList>
    <HeaderList>
      <li><a href="https://www.google.com/">CONTA</a></li>
    </HeaderList>
  </Header>
  </>
  );
}