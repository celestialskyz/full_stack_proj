import {RECEIVE_MUSICALS, RECEIVE_MUSICAL, INITIALFETCHMUSICALS} from '../actions/musical_actions';

const musicalsReducer = (state={}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_MUSICALS:
      return Object.assign({}, action.musicals);
    case INITIALFETCHMUSICALS:
      return Object.assign({},action.musicals);
      case RECEIVE_MUSICAL:
      return Object.assign({}, state, {[action.musical.id]:action.musical});
    default:
      return state;
  }
};

export default musicalsReducer;