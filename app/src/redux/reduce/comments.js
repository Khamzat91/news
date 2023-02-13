
export const SET_COMMENTS = "comments/SET_COMMENTS";

const initialState = {
  comments: [],
};

export const comments = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS: {
      return { ...state, comments: action.payload };
    }
    default:
      return state;
  }
};
