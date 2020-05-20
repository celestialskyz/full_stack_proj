import { combineReducers } from 'redux';
import filters from './filters_reducer';
import modal from './modal_reducer';
import reservationdetails from './reservationdetails';
export default combineReducers({
  filters,
  modal,
  reservationdetails
});
