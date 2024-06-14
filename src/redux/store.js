import { combineReducers, legacy_createStore } from "redux";
import groupReducer from "./group/reducer";

let rootReducer = combineReducers({
  groupReducer,
});

let store = legacy_createStore(rootReducer);

export default store;
