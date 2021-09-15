import React from 'react';
import { useHistory, useParams } from "react-router";
import {Button, Container} from "../Styled/Styled.js";
import axios from "axios";


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

      const goToHome = () => {
        history.push("/");
      };

      const goToListTrips =() => {
        history.push("/listTrips")
      }

      const gotToFormTrip = () => {
        history.push("/formtrip")
      }

      const goToLogin = () => {
        history.push("/login")
      }

      const goToTripDetails =() => {
        history.push("/tripDetails")
      }

    return(
        <Container>
          
            <h1>Bem vindo(a) a LabeX</h1> 

            <Button onClick={goToHome}>
              Home
            </Button>

            <Button onClick={goToListTrips}>
              Lista de Viagens
            </Button>

            <Button onClick={gotToFormTrip}>
              Formulario
            </Button>

            <Button onClick={goToLogin}>
              Login
            </Button>

            <Button onClick={goToTripDetails}>
              Detalhes da Viagens
            </Button>
            
        </Container>      
            
 
    );
}