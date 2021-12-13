import * as Actions from '../../action/userAction/Useraction';
import {IAction} from "../../action/userAction/Model";

// JSON.parse => string
// localStorage.getItem('') => string or null
//JSON.parse(localStorage.getItem('user') || "");
const initialState = {
    loading: false,
    login:false,
    token:''
};

const UserLoginReducer = (state = initialState, action: IAction) => { 
    switch(action.type) {
        case Actions.LOGIN_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case Actions.LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                token: action.payload,
                login:true
            }
        case Actions.LOGIN_ERROR:
            return{
                ...state,
                loading:false,
                token:action.payload, //登入成功存 token 登入失敗存 '登入失敗'
                login:false
            }
        case Actions.LOGOUT:
            localStorage.removeItem("UserToken");
            return{
                ...state,
                token:"",
                login:false
            }
        default:
            return state;
    }
}
export default UserLoginReducer;