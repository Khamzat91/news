import { IS_AUTH } from "../types";

const initialState = {
  isAuth: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH: {
      return { ...state, isAuth: action.payload };
    }
    default:
      return state;
  }
};
