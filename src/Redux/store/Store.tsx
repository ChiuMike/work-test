import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import UserLoginReducer from "../reducer/userReducer/UserReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import {AlertReducer} from '../reducer/alertReducer/AlertReducer';

const composedEnhancer=composeWithDevTools(applyMiddleware(thunkMiddleware,logger))
const rootReducer =combineReducers({
    UserLoginReducer,
    AlertReducer
})
export const store =createStore(
    rootReducer,
    composedEnhancer
    // applyMiddleware(thunk,logger)
)



