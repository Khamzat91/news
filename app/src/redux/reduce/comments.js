import { SET_COMMENTS } from "../types";

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
