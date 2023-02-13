export const IS_AUTH = "user/IS_AUTH";
export const SET_USER_ARTICLES = "user/SET_USER_ARTICLES";
export const SET_USER_COMMENTS = "user/SET_USER_COMMENTS";

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
    case SET_USER_ARTICLES: {
      return { ...state, articles: action.payload}
    }
    case SET_USER_COMMENTS: {
      return { ...state, comments: action.payload}
    }
    default:
      return state;
  }
};
