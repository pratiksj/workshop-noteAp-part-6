import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers } from "redux";
import noteReducer from "./reducer/noteReducer";
import filterReducer from "./reducer/filterReducer";
import { Provider } from "react-redux";
import App from "./App";

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducer);
console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
