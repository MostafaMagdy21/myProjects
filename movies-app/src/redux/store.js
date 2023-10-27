import { createStore } from "redux";
import { movieReducer } from "./reducers/moviesReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(movieReducer, applyMiddleware(thunk));
