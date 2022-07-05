import reducer1 from "./reducer/reducer.jsx";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// reducer2
const date = (state = { name: [] }, action) => {
  switch (action.type) {
    case "SET_SOMETHING":
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

// combinedReducer
const reducer = combineReducers({ reducer1, date });

// create store.
const store = configureStore({ reducer });

export default store;
