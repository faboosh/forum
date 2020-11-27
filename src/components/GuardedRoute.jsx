import React from 'react';
import { Route, Redirect } from "react-router-dom";
import UserKit from '../data/UserKit';

const GuardedRoute = ({ component: Component, children, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth === true && UserKit.getToken()
            ? <Component {...props}/>
            : <Redirect push to='/' />
    )} />
)

export default GuardedRoute;