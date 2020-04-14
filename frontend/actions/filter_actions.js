import {fetchMusicals} from './musical_actions';
export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateBounds = (bounds) =>(
 { type: UPDATE_FILTER,
  bounds
});

export const updateFilter = (bounds) => (dispatch, getState) => {
  dispatch(updateBounds( bounds));
  // debugger
  return fetchMusicals(getState().ui.filters)(dispatch);
};