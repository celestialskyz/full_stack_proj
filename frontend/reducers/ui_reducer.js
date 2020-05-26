import { combineReducers } from 'redux';
import filters from './filters_reducer';
import modal from './modal_reducer';
import reservationdetails from './reservationdetails';
// import indexLimit from './index_limit_res';
export default combineReducers({
  filters,
  modal,
  reservationdetails,
  // indexLimit
});
