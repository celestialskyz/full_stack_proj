import {RECEIVE_MUSICALS} from '../actions/musical_actions';

const musicalsReducer = (state={}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_MUSICALS:
      return Object.values(action.musicals);
    default:
      return state;
  }
};

export default musicalsReducer;