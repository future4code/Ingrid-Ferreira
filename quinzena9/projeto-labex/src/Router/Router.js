import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {HomePage} from "../Pages/HomePage/HomePage"

export const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            
            <Route exact path={"/"}>
               <HomePage />
            </Route>



        </Switch>
        </BrowserRouter> 
    )
}

