import {RECEIVE_RESVS, RECEIVE_RES, REMOVE_RES} from '../actions/reservation-actions';

const reservationsReducer = (state={}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_RESVS:
      return Object.assign({}, state, action.resvs);
    case RECEIVE_RES:
      return Object.assign({}, state, {[action.res.id]:action.res});
    case REMOVE_RES:
      let prevS = Object.assign({}, state);
      delete prevS[action.resId];
      return prevS;
    default:
      return state;
  }
};

export default reservationsReducer;