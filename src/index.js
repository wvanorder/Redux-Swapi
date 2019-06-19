import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
// needed dependancies
// applyMiddleware from redux DONE
// thunk from redux-thunk DONE 
// logger from redux-logger DONE
// rootReducer from ./reducers DONE

const store = createStore(
  rootReducer,
  /* applyMiddleware goes here */
  applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
