import React from "react";
import ReactDOM from "react-dom";
import * as ApiUtil from './util/session_api_util.js';
import {fetchMusicals, fetchMusical} from './actions/musical_actions';
import * as API from './util/musical_api_util';
import {loginUser} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import * as RApi from './util/reservation_api_util';
// debugger
document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById('root');
  // const store = configureStore();
    
  // //ajax
  window.login = ApiUtil.login;
  window.logout = ApiUtil.logout;
  window.signup = ApiUtil.signup;
  window.fetchMusicals = API.fetchMusicals;// //ajax
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
  window.fetchMusicals = fetchMusicals;
  window.fetchMusical = fetchMusical;
  window.fetchReservations = RApi.fetchReservations;
  window.fetchReservation = RApi.fetchReservation;
  window.createReservation = RApi.createReservation;
  window.updateReservation = RApi.updateReservation;
  window.deleteReservation = RApi.deleteReservation;

  // testing

  ReactDOM.render(<Root store={store}/>, root);
});