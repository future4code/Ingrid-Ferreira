import React from 'react';
import { useHistory, useParams } from "react-router";
import {Container} from "../Styled/Styled.js";


export const HomePage = () => {
    const history = useHistory();
    const params = useParams();
    console.log("params", params);

    const UrlBase = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ingrid-johnson"

    const planets = [
        {
          value: 'Mercúrio',
          label: 'Mercúrio',
        },
        {
          value: 'Vênus',
          label: 'Vênus',
        },
        {
          value: 'Marte',
          label: 'Marte',
        },
        {
          value: 'Jupiter',
          label: 'Júpiter',
        },
        {
          value: 'Saturno',
          label: 'Saturno',
        },
        {
          value: 'Urano',
          label: 'Urano',
        },
        {
          value: 'Netuno',
          label: 'Netuno',
        },
        {
          value: 'Plutão',
          label: 'Plutão',
        },
        {
          value: 'Titã',
          label: 'Titã',
        }, {
          value: 'Ganimedes',
          label: 'Ganimedes',
        },
      ];

    return(
        <Container>
            <p>Bem vindo(a) a LabeX</p>  
        </Container>      
            
 
    );
}