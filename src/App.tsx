import React, { useEffect } from 'react';
import './App.css';
import Login from './Components/Login';
import LoadingOverlay from 'react-loading-overlay-ts';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { Route,HashRouter,Switch } from "react-router-dom";
import Dashboard from './Components/DashBoard/Dashboard';
import {AlertActs} from './Redux/action/alertAction/AlertAction';
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  const dispatch=useDispatch();
  const loading=useSelector((state:RootStateOrAny)=>state.UserLoginReducer.loading);
  const alert=useSelector((state:RootStateOrAny)=>state.UserLoginReducer.token);

  console.log("Alert!!!");
  console.log(alert)

  useEffect(()=>{
    dispatch(AlertActs.clear());
  },[])

  return (
    <HashRouter>
      <Switch>
        <div className="App">
          <LoadingOverlay
            active={loading}
            spinner
            text='Login...'>
            <Route path="/" exact render={()=>{return(<Login />)}} />
            <Route path="/dashboard" render={()=>{return(<Dashboard />)}} />
          </LoadingOverlay>  
        </div>
      </Switch>
    </HashRouter>
  );
}
export default App;
