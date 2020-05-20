import {RECEIVE_PENDING_RES} from "../actions/reservation-actions";
import merge from 'lodash/merge';

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  if (action.type === RECEIVE_PENDING_RES) {
    //  debugger
    return action.res;
  } else {
    return {};
  }
};

export default filtersReducer;