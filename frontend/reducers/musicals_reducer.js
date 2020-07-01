import {RECEIVE_MUSICALS, RECEIVE_MUSICAL, INITIALFETCHMUSICALS} from '../actions/musical_actions';
import { RECEIVE_RESVS } from '../actions/reservation-actions';
import {CLOSE_MODAL} from '../actions/modal_actions';
const musicalsReducer = (state={}, action) =>{
  const oldState = Object.freeze(state);
  switch(action.type){
    case RECEIVE_RESVS:
    case RECEIVE_MUSICALS:
      return Object.assign({}, action.musicals);
    case INITIALFETCHMUSICALS:
      return Object.assign({}, oldState ,action.musicals);
    case RECEIVE_MUSICAL:
     return Object.assign({}, state, {[action.musical.id]:action.musical});
    default:
      return state;
  }
};

export default musicalsReducer;