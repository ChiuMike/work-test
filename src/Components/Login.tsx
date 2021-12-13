import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import {UserActs} from '../Redux/action/userAction/Useraction';
import { Redirect } from 'react-router-dom';
import '../CSS/login.css'
import Alert from '@mui/material/Alert'



const Login=()=>{
    const dispatch = useDispatch();
    const alert=useSelector((state:RootStateOrAny)=>state.UserLoginReducer.token);
    const loginStatus=useSelector((state:RootStateOrAny)=>state.UserLoginReducer.login);

    const [user,setUser] = useState ({username:'',password:''});
    const {username,password} = user;

    const handleChange : React.ChangeEventHandler<HTMLInputElement> = (e:any) => {
        const {name,value} = e.target;
        setUser(user=>({...user,[name]:value}))
    }

    const handleSubmit :React.MouseEventHandler<HTMLButtonElement> = (e:any)=>{
        e.preventDefault();
        if(username && password){
            dispatch(UserActs.login(user));
        }
    }
    return(
        <div className="login">
        {alert==="登入失敗" &&
            <Alert severity="error">帳號或密碼錯誤</Alert>
        }
        <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 3, width: "25ch" } }}
            noValidate
            autoComplete="off"
            style={{ textAlign: "center",zIndex: "1" }}>
        <div>
        <h1 style={{marginBottom: "0"}}>Login Here</h1>
            <TextField
                name='username'
                required
                id="username"
                label="Required"
                defaultValue="username"
                style={{ width: "300px" }}
                value={username}
                onChange={handleChange}/>
        </div>
        <div>
            <TextField
                name='password'
                required
                id="password"
                label="Required"
                defaultValue="Password"
                style={{ width: "300px" }}
                value={password}
                onChange={handleChange}/>
        </div>
        <Button className="loginbutton"
         variant="contained" onClick={handleSubmit} 
         style={{marginTop: "20px"}}>Login</Button>
         {loginStatus && <Redirect to="/dashboard" />}
        </Box>
    </div>
    )
}
export default Login;