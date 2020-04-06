import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions'


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
          Object.assign({},state, { errors:[] });
        case RECEIVE_ERRORS:
          Object.assign({}, state, { errors: action.errors });
        default:
            return state;
    }

};