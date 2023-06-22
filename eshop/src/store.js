import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user";
import panierReducer from "./reducer/panier"

const rootReducer = combineReducers({
  user: userReducer,
  panier:panierReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
