import { legacy_createStore, combineReducers } from "redux";
import { user } from "./reducers/user";

const reducers = combineReducers({
  user,
});

export const store = legacy_createStore(reducers);
