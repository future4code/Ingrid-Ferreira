import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import fundo from './Img/MusicBlack.jpg'

export const GlobalStyle = createGlobalStyle`
html, body {
    margin:0;
    font-family: 'Signika', sans-serif;
}

button {
    font-family: 'Gotham Pro';
}
`

export const BaseSite = styled.div`
display: flex;
flex-direction: column;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-color: black;
width: 100%;
height: 124vh;
background-image: url(${fundo});
`

export const Header = styled.header`
height: 90px;
display: flex;
font-size: 25px;
align-items: center;
text-align: center;
justify-content: center;
color: black;
position: sticky;
top:0;
left: 0;
background-color: #0088cc;

img {
    height: 68px;
    margin: 0 12px;
}

`

export const BotaoMultiPaginas = styled.div`

    margin: auto;
    margin-bottom: 54px;


button {
    border: 1px solid #0088cc;
    border-radius: 15px;
    background-image: linear-gradient(to left, gray, #0088cc, gray);
    font-size: 30px;
    transition: 1s ease-in-out;
    border: 1px solid #91C9FF;
    cursor: pointer;
    width: 380px;
    height: 60px;
    outline: none;   
    color: white;
   
}

`

export const Footer = styled.footer`
margin-top: -9px;
text-align: center;
background-color: #0088cc;
color:white;

`
