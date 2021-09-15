import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {Button, Container} from "../Styled/Styled.js";

export const ApplicationFormPage = () => {
    const history = useHistory();
    const params = useParams();

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
          
            <h1>Formulario</h1> 

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