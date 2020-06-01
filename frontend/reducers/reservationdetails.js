import {RECEIVE_PENDING_RES, CLEAR_PENDING_RES} from "../actions/reservation-actions";
import merge from 'lodash/merge';

const ResDetailReducer = (state = {}, action) => {
 const oldState= Object.freeze(state);
  switch(action.type){
    case RECEIVE_PENDING_RES: 
    return Object.assign({}, oldState, action.res);
   case CLEAR_PENDING_RES:
    return {};
    default:
      return oldState;
  }
    
};

export default ResDetailReducer;