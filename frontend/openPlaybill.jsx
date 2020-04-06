import React from "react";
import ReactDOM from "react-dom";
import {login,logout,signup} from './util/session_api_util.js';
import {loginUser} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=>{

  //ajax
  window.login = login;
  window.logout = logout;
  window.signup = signup;
   //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.loginUser = loginUser;


  const root = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store={store}/>, root);
})