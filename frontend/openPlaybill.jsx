import React from "react";
import ReactDOM from "react-dom";
import * as ApiUtil from './util/session_api_util.js';
//import {loginUser} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
// debugger
document.addEventListener("DOMContentLoaded", ()=>{
    //ajax
  // window.login = ApiUtil.login;
  // window.logout = ApiUtil.logout;
  // window.signup = ApiUtil.signup;

  const root = document.getElementById('root');
  const store = configureStore();
  // debugger

  console.log(store);
  // const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);
});