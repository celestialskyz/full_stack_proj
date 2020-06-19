import { connect } from 'react-redux';
import ReservationConfirmForm from "./reservation_confirm_form";
import {openModal} from '../../actions/modal_actions';
import {createRes} from '../../actions/reservation-actions';
const msp = (state) => {
  debugger
  return({
    reserver_id: state.session.currentUserId,
    currentUserFname: state.session.currentUser.first_name,
    currentUserEmail: state.session.currentUser.email,
    reservation: state.ui.reservationdetails,
    // musical: state.entities.musicals[ownProps.match.params.musicalId],
  });
};

const mdp = dispatch => {
  return({
    submitEvent:(res)=>dispatch(createRes(res)),
    openModal: (modal)=>dispatch(openModal(modal))
  });
};
  
  export default connect(msp,mdp)(ReservationConfirmForm);