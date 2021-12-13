import React from 'react';
import { Route, Redirect,RouteProps} from 'react-router-dom';

interface IPrivateRoute extends RouteProps {
    component: React.ComponentType<any>;
}

const PrivateRoute=({component: Component, ...routeProps}: IPrivateRoute)=>{
    const { path } = routeProps;
    if(localStorage.getItem("UserToken")===null){
        return <Redirect to="/" />
    }
    return <Route path={path} render={() => {return <Component {...routeProps} />}}/>
}

export default PrivateRoute;