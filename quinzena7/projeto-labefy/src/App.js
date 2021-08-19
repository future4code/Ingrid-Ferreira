import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

import logo from './Img/fone_logo.png'

const Site = styled.div`
height: 100vh;
display:flex;
justify-content: space-between;
overflow-x: hidden;
`;

const Header = styled.header`
background-color: #0088cc;
height: 150px;
display: flex;
font-size: 35px;
align-items: center;

img {
    width: 78px;
    height: 78px;
    margin: 0 12px;
}

`;
const BtnPaginas = styled.div`
display: flex;
align-items: center;
justify-content: center;

  button {
    border: none;
    background-color: #ADD8E6;
    border-radius: 10px;
    font-size: 30px;
  }
`
const Footer = styled.footer`
background-color: #0088cc;
display: flex;
justify-content: flex-end;
padding: 25px;
`;

const TextoRodape = styled.h4`
  margin-left: 20px;
`;

export default class App extends React.Component {

  state ={
    playlists: [],
    inputPlaylist: "",
    paginaAtual: "cadastro",
    playlistDetalhe: "",
    playlistDetalheNome: "",
    playlistDetalheId: "",
    inputMusica: "",
    inputArtistaMusica: "",
    inputUrlMusica: ""
  }



  
  render() {
    return (
      <Site>
        <Header>
           <img src={logo} alt="Labefy" onClick={this.goToPaginaCadastro} /> <h1 onClick={this.goToPaginaCadastro}>Labefy</h1>
        </Header>
                
          <BtnPaginas><button onClick={this.goToPaginaLista}>Lista de Playlists</button></BtnPaginas>
          <BtnPaginas><button onClick={this.goToPaginaCadastro}>Cadastrar Playlists</button></BtnPaginas>
          <BtnPaginas><button onClick={this.goToPaginaLista}>Voltar</button></BtnPaginas>
        <Footer>
          <p class="text">©️ 2021 All rights reserved.</p>
          <TextoRodape>Desenvolvido pela estudante da Turma Johnson: Ingrid Ferreira</TextoRodape>
        </Footer>
      </Site>

      
    )
  }
  
}


