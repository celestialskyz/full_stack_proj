import { connect } from 'react-redux';
import ReservationConfirmForm from "./reservation_confirm_form";
import {openModal} from '../../actions/modal_actions';
const msp = (state, ownProps) => {
  
  // let filters= state.ui.filters.inputQ ? state.ui.filters : {inputQ:"",
  //    date: new Date(Date.now()),
  //    psize: 1,
  //    time: 1900};

  return({
    login: state.session.currentUserId,
    currentUserFname: state.session.currentUser.first_name,
    currentUserEmail: state.session.currentUser.email,
    res: state.ui.reservationdetails
  });
};

const mdp = dispatch => {
  return({
    createRes:(userId, res)=>dispatch(createRes(userId, res)),
    openModal: (modal)=>dispatch(openModal(modal))
  });
};
  
  export default connect(msp,mdp)(ReservationConfirmForm);