import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { user } from "./reduce/user";
import { articles } from "./reduce/articles";
import { comments } from "./reduce/comments";

const rootReducer = combineReducers({
  user,
  articles,
  comments,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
