import {thunk} from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import groupReducer from "./group/reducer";

let rootReducer = combineReducers({
  groupReducer,
});

let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
