/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { DivsList, MainDivs, DivIMG} from './styles'
import ReaderIMG from '../../Images/newReader.svg'
import WriterIMG from '../../Images/writer.svg'
import ContactIMG from '../../Images/cleanContact.png'
import FriendsIMG from '../../Images/friendship.svg'
import {Container} from '../../components/Container'
import {InputForm} from '../../components/InputForm/styles'
import {GenButton} from '../../components/GenButton/styles'
import SiteHeader from '../../components/SiteHeader'
import {isEmail} from 'validator'
import axios from 'axios'

export default class Main extends Component {
  constructor () {
    super()
    this.state = {
      emailValue: '',
      wrongEmail: false
    }
  }

  checkEmail = (event) => {
    const content = event.target.value

    this.setState({emailValue:content})
    if (isEmail(content) || content === '') {
      this.setState({wrongEmail: false})
    } else {
      this.setState({wrongEmail: true})
    }
  }

  handleSubmit = async () => {

    return await axios.post('http://localhost:3333/contact', {
      name: 'tiago',
      email: 'tiago10moreira1@gmail.com',
      subject: 'pendencias',
      message: 'olha isso aqui, por favor!'
    }).then(() => console.log('sucesso')).catch(() => console.log('erro'))


    // await axios.post('localhost:3333/contact', {
    //   name: 'oi',
    //   email: 'ola',
    //   subject: 'pickles',
    //   message: 'manteiga'
    // })
  }


  render() {
    const {wrongEmail, emailValue} = this.state

    return (
    <Container>
      <div style={{backgroundColor:"#abcbd1", height:"100%"}}></div>
      <SiteHeader/>
      <DivsList>
        <li>
          <MainDivs inputColor="#eb7ab8" inputHeight="50%" >
            <pre>
              <p>O Problema</p>
                A equipe da redação escrevia, escrevia e escrevia sem parar.
                Novas propostas de publicações vinham a todo momento, até um
                ponto em que ficou difícil de gerenciar à mão o que era feito
                e levado em conta.
            </pre>
            <DivIMG src={ReaderIMG} alt="Apresentação"/>
          </MainDivs>
        </li>
        <li>
          <MainDivs inputColor="#6fc1d1" inputHeight="50%">
              <DivIMG src={WriterIMG} alt="Publicações de Destaque"/>
            <pre>
              <p> A Solução</p>
              E você, leitor, pode nos ajudar com esse projeto! Na plataforma,
              poderá enviar propostas de pautas que serão analisadas por nossos
              redatores. Quem sabe a sua ideia não vira uma próxima publicação?
            </pre>
          </MainDivs>
        </li>
        <li>
          <MainDivs inputHeight="50%" inputColor="#eb7ab8">
            <pre>
              <p> Quer continuar nos ajudando?</p>
              Você sabia que a nosso meio de comunicação possui <strong>10000</strong> leitores
              semanais? E esse número não para de crescer! Com a sua ajuda, pessoas
              podem cada vez mais se interessar pela leitura e trazer paz ao mundo.
            </pre>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent: "space-between"}}> 
              <DivIMG src={FriendsIMG} alt="Imagem de Amizade e Companheirismo"/>
              <br/><Link to="/conta"> Crie a sua Conta Aqui! </Link>
            </div>
          </MainDivs>
        </li>
        <li>
          <MainDivs inputColor="#eae1ed" inputHeight="50%" inputPadding="2% 0">
            <div style={{width:"400px"}}>
              <h2> Entre em Contato! </h2>
              <pre>
              </pre>
              <form method="post" /* action={this.handleSubmit()} */ action="/contact">
                <InputForm>
                  <p>Nome</p>
                  <input type="text" placeholder="Nome"></input>
                </InputForm>
                <InputForm>
                  <p>Email</p>
                  <input type="text" value={emailValue} placeholder="Email" onChange={this.checkEmail}></input>
                  {wrongEmail &&
                  <span>Formato Inválido</span>
                  }
                  </InputForm>
                <InputForm customWidth="100%" >
                  <p>Assunto</p>
                  <input type="text" placeholder="Assunto"></input>
                </InputForm>
                <InputForm>
                  <p>Mensagem</p>
                  <textarea name="Contact Subject" rows="10" cols="30"></textarea>
                </InputForm>
                <GenButton type="submit" inputColor="#aaa" inMarginLeft="7px"> Enviar </GenButton>
              </form>
            </div>
            <DivIMG src={ContactIMG} alt="Contato"/>
          </MainDivs>
        </li>
      </DivsList>
    </Container>
    );
  }
}
