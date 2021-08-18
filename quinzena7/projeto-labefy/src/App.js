import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Site = styled.div`
height: 100vh;
/* background-color: black; */
display:flex;
justify-content: space-between;
overflow-x: hidden;
`;

const Header = styled.header`
background-color: #FAB24E;
height: 150px;
display: flex;
font-size: 35px;
align-items: center;
`;

const Footer = styled.footer`
background-color: #FE7E01;
display: flex;
justify-content: flex-end;
padding: 25px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Site>
        <Header>Labefy</Header>
        <Footer></Footer>
      </Site>

      
    )
  }
  
}


