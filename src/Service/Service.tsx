import axios from "axios";
import axiosInstance from "../Api";

const login=(user:any):any=>{
    console.log("login");
    console.log(user);
    return axiosInstance.post('admin/signin',user)
    // .then((res)=>{
    //     console.log("res===",res);
    //     if(res.data.success){
    //         console.log("成功!")
    //         localStorage.setItem('UserToken',res.data.token);
    //         return res.data.token;
    //     }else{
    //         logut();
    //         return res.data.message;
    //     }
    // })
}

const logut=()=>{
    localStorage.removeItem("UserToken")
}

export const userService:any = {
    login,
    logut
}
