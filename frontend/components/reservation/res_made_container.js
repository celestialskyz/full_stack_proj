import { connect } from 'react-redux';
import ReservationMadeForm from "./res_made_form";
import {requestResvs,updateRes, deleteRes, requestRes} from '../../actions/reservation-actions';
import {requestUser} from '../../actions/user_actions';
import {createRes} from '../../actions/reservation-actions';
const msp = (state, ownProps) => {
  // debugger
  return({
    reserver_id: state.session.currentUserId,
    currentUserFname: state.session.currentUser.first_name,
    reservation: Object.assign({}, state.ui.reservationdetails,{mName: state.entities.musicals[ownProps.match.params.musicalId].name}),
    mPic : state.entities.musicals[ownProps.match.params.musicalId].photoUrls
  });
};

const mdp = dispatch=>{
  return({
    requestResvs: (userId) =>dispatch(requestResvs(userId)),
    requestRes: (userId, resId) =>dispatch(requestRes(userId, resId)),
    updateRes: (userId, res) => dispatch(updateRes(userId, res)),
    deleteRes: postId => dispatch(deleteRes(postId)),
  });
};

export default connect(msp, mdp)(ReservationMadeForm);