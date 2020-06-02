import {RECEIVE_RESVS, RECEIVE_RES, REMOVE_RES} from '../actions/reservation-actions';

const reservationsReducer = (state={}, action) =>{
  const oldState = Object.freeze(state);
  switch(action.type){
    case RECEIVE_RESVS:
      return Object.assign({}, oldState, state, action.resvs);
    case RECEIVE_RES:
      return Object.assign({}, oldState, {[action.res.id]:action.res});
    case REMOVE_RES:
      let prevS = Object.assign({}, state);
      delete prevS[action.resId];
      return prevS;
    default:
      return state;
  }
};

export default reservationsReducer;