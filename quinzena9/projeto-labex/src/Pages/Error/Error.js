import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const Error = () => {
    const history = useHistory();
    const params = useParams();

    return(
     
        <p> 404! </p>            

);
}