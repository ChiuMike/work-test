import * as Actions from '../../action/alertAction/AlertAction';
import {IAlertAction} from '../../action/userAction/Model';

const initialState={
    message:''
};

export const AlertReducer=(state = initialState,action:IAlertAction)=>{
    switch(action.type){
        case Actions.ALERT_SUCCESS:
            return{
                ...state,
                message: action.payload
            }
        case Actions.ALERT_ERROR:
            return{
                ...state,
                message: action.payload
            }
        case Actions.ALERT_CLEAR:
            return {
                ...state,
                message:''
            }
        default:
            return state;
    }
}