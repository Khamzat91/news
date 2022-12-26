import {combineReducers} from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { user } from "./reduce/user";
import { articles } from "./reduce/articles";
 
const rootReducer = combineReducers({
user,
articles
})

const store = createStore(rootReducer, applyMiddleware(thunk))



export default store;