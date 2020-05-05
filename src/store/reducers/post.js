import { OUT_APP } from "../types";

const initialState = {
  auther: false,
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case OUT_APP:
      return { ...state, auther: action.preload };
    default:
      return state;
  }
  return state;
};
