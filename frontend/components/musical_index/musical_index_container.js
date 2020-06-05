import { connect } from 'react-redux';
import {fetchMusicals} from '../../actions/musical_actions';
import MusicalIndex from './musical_index';
import {receivePendingRes} from '../../actions/reservation-actions';
import {openModal} from "../../actions/modal_actions";

const msp = (state)=>{
  
  return({
     musicals: Object.values(state.entities.musicals),
     klass: state.ui.filters.inputQ ? "search" : "home",
     time: state.ui.filters.time ? state.ui.filters.time: 0,
     filterinfo: state.ui.filters,
     currentUserId: state.session.currentUserId
  });

};
const mdp = (dispatch)=>{
  return({
    fetchMusicals: musicalId => dispatch(fetchMusicals(musicalId)),
    handleSubmit: (reservationDetails) => dispatch(receivePendingRes(reservationDetails)),
    openModal: modal => dispatch(openModal(modal)),
  });

};

export default connect(msp, mdp)(MusicalIndex);