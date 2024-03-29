
export const SET_ARTICLES = "SET_ARTICLES";
export const SET_SHOW_ARTICLES = "SET_SHOW_ARTICLES";

const initialState = {
  data: [],
  article: null
};

export const articles = (state = initialState, action) => {
  switch (action.type) {
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
