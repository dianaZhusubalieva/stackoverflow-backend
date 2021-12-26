import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
// import { store } from "./vanilaRedux";
import userReducer from "./toolkit_login/features/user";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
