import React from "react";
import ReactDOM from "react-dom";
import * as ApiUtil from './util/session_api_util.js';
import {loginUser} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
// debugger
document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById('root');
  // const store = configureStore();
    
  // //ajax
  window.login = ApiUtil.login;
  window.logout = ApiUtil.logout;
  window.signup = ApiUtil.signup;

  window.loginUser = loginUser;
  
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, currentUserId: window.currentUser.id} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={store}/>, root);
});