import {combineReducers} from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { user } from "./reduce/user";
 
const rootReducer = combineReducers({
user
})

const store = createStore(rootReducer, applyMiddleware(thunk))



export default store;