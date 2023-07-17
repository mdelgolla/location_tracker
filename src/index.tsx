// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root_reducer";
import App from "../App";
import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from './reducers/rootReducer';
// import App from './App';

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
