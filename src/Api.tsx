import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://vue-course-api.hexschool.io/'
})

axiosInstance.interceptors.response.use((response:any)=>{
    if(response.data.success){
        console.log("response===",response)
        console.log("成功!")
        localStorage.setItem('UserToken',response.data.token);
        return response.data.token;
    }
    else if(response.status === 200){
        console.log("response===",response)
        console.log("Status Code===200")
        localStorage.removeItem("UserToken")
        return response.data.message;
    }
}
)

export default axiosInstance;