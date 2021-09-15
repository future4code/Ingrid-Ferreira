import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const AdminHomePage = () => {
    const history = useHistory();
    const params = useParams();

    return(
     
        <p>Admin Home Page!</p>            

);
}