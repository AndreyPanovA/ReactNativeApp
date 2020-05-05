import { createStore, combineReducers } from "redux";
import { postReducer } from "./reducers/post";

const rootReducer = combineReducers({
  post: postReducer,
});

// const reducer = (state) => {};
export default createStore(rootReducer);
