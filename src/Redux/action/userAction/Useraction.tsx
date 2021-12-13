import { Dispatch } from "redux";
import {userService} from '../../../Service/Service';
export const LOGIN_REQUEST="LOGIN_REQUEST";
export const LOGIN_ERROR="LOGIN_ERROR";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGOUT="LOGOUT";

interface IUser {
    username: string,
    password: string
}

interface IFunction {
    type: string,
    user?: IUser,
    error?: string
}

const login = (user: IUser) => async (dispatch:Dispatch) => {
    dispatch({
        type:LOGIN_REQUEST
    })
    const token: string  = await userService.login(user);
    if(token==="登入失敗"){
        dispatch({
            type:LOGIN_ERROR,
            payload: token
        })
    }else{
        dispatch({
            type: LOGIN_SUCCESS,
            payload: token
        })
    }  
}

const logout=()=>{
    return({
        type:LOGOUT,
    })
}

// const login = (user: IUser) =>{
//     return (dispatch: Dispatch)=>{

//         const test = request(user);

//         console.log("login!!!");
//         console.log(test);
//         dispatch(request(user));
        
//         userService.login(user).then(
//             (user:IUser)=>{
//                 dispatch(success(user));
//             },
//             (error:any)=>{
//                 dispatch(fail(error.toString()));
//             }
//         )

//     }
//     function request(user:IUser): IFunction { return {type:LOGIN_REQUEST, user} };
//     function success(user:IUser): IFunction{ return {type:LOGIN_SUCCESS, user} };
//     function fail(error: string): IFunction { return {type:LOGIN_ERROR, error} };
// }

export const UserActs:any={
    login,
    logout
}