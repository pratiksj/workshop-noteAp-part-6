import React from "react";
import ReactDOM from "react-dom/client";
//import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import noteService from "./services/notes";
import noteReducer, { appendNote } from "./reducer/noteReducer";
import filterReducer from "./reducer/filterReducer";
import { Provider } from "react-redux";
import App from "./App";

// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer,
// });

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

noteService.getAll().then((notes) =>
  notes.forEach((note) => {
    store.dispatch(appendNote(note));
  })
);
// const store = createStore(reducer);
console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
