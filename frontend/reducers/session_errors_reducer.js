import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS, LOGOUT_CURRENT_USER } from '../actions/session_actions';


const _nullErrors = [];

const SessionErrorsReducer= (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return [action.errors];
    case RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER:
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;