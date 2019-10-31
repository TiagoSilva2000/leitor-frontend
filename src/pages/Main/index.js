/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { DivsList, MainDivs, DivIMG} from './styles'
import ReaderIMG from '../../Images/newReader.svg'
import WriterIMG from '../../Images/writer.svg'
import ContactIMG from '../../Images/cleanContact.png'
import FriendsIMG from '../../Images/friendship.svg'
import {Container} from '../../components/Container'
import {InputForm} from '../../components/InputForm/styles'
import {GenButton} from '../../components/GenButton/styles'
import SiteHeader from '../../components/SiteHeader'
// f02996
export default class Main extends Component {
  render() {
    return (
    <>
    <Container>
      <SiteHeader/>
      <DivsList>
        <li>
          <MainDivs inputColor="#eb7ab8" inputHeight="400px">
            <pre>
              <p> O Problema </p>
                A equipe da redação escrevia, escrevia e escrevia sem parar.
                Novas propostas de publicações vinham a todo momento, até um
                ponto em que ficou difícil de gerenciar à mão o que era feito
                e levado em conta.
            </pre>
            <DivIMG src={ReaderIMG} alt="Apresentação"/>
          </MainDivs>
        </li>
        <li>
          <MainDivs inputColor="#6fc1d1" inputHeight="400px">
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
          <MainDivs inputHeight="400px" inputColor="#eb7ab8">
            <pre>
              <p> Quer continuar nos ajudando?</p>
              Você sabia que a nosso meio de comunicação possui <strong>10000</strong> leitores
              semanais? E esse número não para de crescer! Com a sua ajuda, pessoas
              podem cada vez mais se interessar pela leitura e trazer paz ao mundo.
            </pre>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent: "space-between"}}> 
              <DivIMG src={FriendsIMG} alt="Imagem de Amizade e Companheirismo"/>
              <br/><a href="https://www.google.com"> Crie a sua Conta Aqui! </a>
            </div>
          </MainDivs>
        </li>
        <li>
          <MainDivs inputColor="#eae1ed">
            <div style={{width:"400px"}}>
              <pre>
              <p style={{marginTop: "50px", fontSize:"30px", color:"black"}}> Entre em Contato! </p>
              </pre>
              <form>
                <InputForm>
                  <p>Nome</p>
                  <input type="text" placeholder="Nome"></input>
                </InputForm>
                <InputForm>
                  <p>Email</p>
                  <input type="text" placeholder="Email"></input>
                </InputForm>
                <InputForm style={{width:"100%"}} >
                  <p>Assunto</p>
                  <input type="text" placeholder="Assunto"></input>
                </InputForm>
                <InputForm>
                  <p>Mensagem</p>
                  <textarea name="Contact Subject" rows="10" cols="30"></textarea>
                </InputForm>
                <GenButton inputColor="#aaa" inMarginLeft="7px"> Enviar </GenButton>
              </form>
            </div>
            <DivIMG src={ContactIMG} alt="Contato"/>
          </MainDivs>
        </li>
      </DivsList>
    </Container>
    </>
    );
  }
}
