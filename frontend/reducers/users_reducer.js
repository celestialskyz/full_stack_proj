import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {GET_ALL_USERS} from '../actions/user_actions';
const usersReducer = (state={}, action) =>{
  debugger
  Object.freeze(state);
  switch(action.type){
    case GET_ALL_USERS:
      return Object.values(action.users);
    case RECEIVE_CURRENT_USER:
        return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
      }
};

export default usersReducer;