import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const Login = () => {
    const history = useHistory();
    const params = useParams();

    return(
     
        <p>Login! </p>            

);
}