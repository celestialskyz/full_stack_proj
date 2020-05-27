import { connect } from 'react-redux';
import ReservationMadeForm from "./res_made_form";
import {requestResvs,updateRes, deleteRes} from '../../actions/reservation-actions';
import {requestUser} from '../../actions/user_actions';
import {createRes} from '../../actions/reservation-actions';
const msp = (state, ownProps) => {
  return({
    reserver_id: state.session.currentUserId,
    currentUserFname: state.session.currentUser.first_name,
    reservation: state.ui.reservationdetails
  });
};

const mdp = dispatch=>{
  return({
    requestResvs: (userId) =>dispatch(requestResvs(userId)),
    updateRes: (userId, res) => dispatch(updateRes(userId, res)),
    deleteRes: postId => dispatch(deleteRes(postId)),
  });
};

export default connect(msp, mdp)(ReservationMadeForm);