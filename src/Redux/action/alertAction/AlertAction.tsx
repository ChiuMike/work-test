import React from 'react';

export const ALERT_SUCCESS="ALERT_SUCCESS";
export const ALERT_ERROR="ALERT_ERROR";
export const ALERT_CLEAR="ALERT_CLEAR";

const success = (message:string) => {
    return({
        type:ALERT_SUCCESS,
        payload:message
    })
}
const error = (message:string) => {
    return({
        type:ALERT_ERROR,
        payload:message
    })
}
const clear=()=>{
    return({
        type:ALERT_CLEAR,
    })
}
export const AlertActs:any={
    success,
    error,
    clear
}