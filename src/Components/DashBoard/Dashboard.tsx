import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@mui/material/Button";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import {UserActs} from '../../Redux/action/userAction/Useraction';
import { Redirect, Link} from 'react-router-dom';
const Dashboard=()=>{
    const dispatch=useDispatch();
    const loginStatus=useSelector((state:RootStateOrAny)=>state.UserLoginReducer.login);

    console.log("loginStatus!!!")
    console.log(loginStatus)

    const handleLogout=(e:any)=>{
        e.preventDefault();
        dispatch(UserActs.logout());
    }
    return(
        <div className="dashboard">
            <Link to="/">
                <Button variant="contained" onClick={handleLogout}>Logout</Button>
                {loginStatus===false && <Redirect to="/" />}
            </Link>
        </div>
    )
}
export default Dashboard;
//mikechiu8512@gmail.com
//gav96401