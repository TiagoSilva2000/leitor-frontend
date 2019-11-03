import React from 'react'
import {Displayer, Logo, Title, Header, HeaderList, Wrapper} from './styles'
import LogoIMG from '../../Images/whaleLogo.png'
import {Link} from 'react-router-dom'

export default function SiteHeader() {

  return (
  <Wrapper>
  <Displayer>
    <Link to="/">
    <Logo src={LogoIMG} alt="Logo do Site"/>
    </Link>
    <Title> <Link to="/">Leitor Pauteiro</Link></Title>
    <br/>
  </Displayer>
  <Header>
    <HeaderList>
      <li><Link to="/">INÍCIO</Link></li>
      {/* <li><a href="https://www.google.com/">PUBLICAÇÕES</a></li> */}
      {/* <li><a href="https://www.google.com/">SOBRE</a></li> */}
    </HeaderList>
    <HeaderList>
      <li><Link to="/conta">CONTA</Link></li>
    </HeaderList>
  </Header>
  </Wrapper>
  );
}