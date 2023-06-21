import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
