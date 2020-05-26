import {RECEIVE_PENDING_RES} from "../actions/reservation-actions";
import merge from 'lodash/merge';

const ResDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  if (action.type === RECEIVE_PENDING_RES) {
    return Object.assign({}, state, action.res);
  } else {
    return {};
  }
};

export default ResDetailReducer;