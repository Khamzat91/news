import { IS_AUTH, USER_ARTICLES } from "../types";

const initialState = {
  isAuth: false,
  articles: [],
  comments: []
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH: {
      return { ...state, isAuth: action.payload };
    }
    case USER_ARTICLES: {
      return { ...state, articles: action.payload}
    }
    default:
      return state;
  }
};
