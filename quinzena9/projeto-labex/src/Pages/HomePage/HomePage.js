import React from 'react';
import { useHistory, useParams } from "react-router";

export const HomePage = () => {
    const history = useHistory();
    const params = useParams();
    console.log("params", params);

    return(
     
            <p>Bem vindo(a)</p>            
 
    );
}