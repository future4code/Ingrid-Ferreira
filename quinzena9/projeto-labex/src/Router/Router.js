import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {HomePage} from "../Pages/HomePage/HomePage"
import {ListTrips} from "../Pages/ListTrips/ListTrips"
import {ApplicationFormPage} from "../Pages/AplicationForm/AplicationForm"
import {Login} from "../Pages/Login/Login"
import {TripDetails} from "../Pages/TripDetails/TripDetails"
import {Error} from "../Pages/Error/Error"

export const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            
            <Route exact path={"/"}>
               <HomePage />
            </Route>

            <Route exact path={"/listTrips"}>
                <ListTrips />
            </Route>

            <Route exact path={"/formtrip"}>
                <ApplicationFormPage />
            </Route>

            <Route exact path={"/login"}>
                <Login />
            </Route>

            <Route exact path={"/tripDetails"}>
                <TripDetails />
            </Route>

            <Route>
                <Error />
            </Route>



        </Switch>
        </BrowserRouter> 
    )
}

