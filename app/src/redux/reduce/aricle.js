import { SET_ARTICLES, SET_SHOW_ARTICLES } from "../types";

const initialState = {
  data: [],
  article: null
};

export const article = (state = initialState, action) => {
  switch (action.payload) {
    case SET_ARTICLES: {
      return {...state,  data: action.payload}
    }
    case SET_SHOW_ARTICLES: {
      return {...state, article: action.payload}
    }

    default:
      return state;
  }
};
