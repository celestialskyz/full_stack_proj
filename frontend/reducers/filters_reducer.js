import { UPDATE_FILTER } from "../actions/filter_actions";
import merge from 'lodash/merge';

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = action.bounds;
    //  debugger
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default filtersReducer;