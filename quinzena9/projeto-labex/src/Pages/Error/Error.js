import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {Container} from "../Styled/Styled.js";

export const Error = () => {
    const history = useHistory();
    const params = useParams();

    return(
        <Container>
            <h1> 404! </h1> 
        </Container>
                   

);
}