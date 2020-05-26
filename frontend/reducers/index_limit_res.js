import {RECEIVE_INDEX_LIMIT} from "../actions/reservation-actions";
import merge from 'lodash/merge';

const ResIndexLimitReducer = (state = {}, action) => {
  Object.freeze(state);
  if (action.type === RECEIVE_INDEX_LIMIT) {
    return Object.assign({}, state, action.limit);
  } else {
    return {};
  }
};

export default ResIndexLimitReducer;