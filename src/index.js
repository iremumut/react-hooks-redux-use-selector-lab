import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import usersReducer from "./features/users/usersSlice";

const store = createStore(usersReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// add imports and code

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("root")
);
