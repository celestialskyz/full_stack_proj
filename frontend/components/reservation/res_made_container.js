import { connect } from 'react-redux';
import ReservationMadeForm from "./res_made_form";
import {requestResvs,updateRes, deleteRes, requestRes, clearPendingRes, receivePendingRes} from '../../actions/reservation-actions';
import {openModal} from "../../actions/modal_actions";
const msp = (state, ownProps) => {
  debugger
  return({
    reserver_id: state.session.currentUserId,
    currentUserFname: state.session.currentUser.first_name,
    reservation: Object.assign({}, state.ui.reservationdetails,{mName: state.entities.musicals[ownProps.match.params.musicalId].name}),
    mPic: state.entities.musicals[ownProps.match.params.musicalId].photoUrls,
    musical: state.entities.musicals[ownProps.match.params.musicalId]
  });
};

const mdp = dispatch=>{
  
  return({
    clearPendingRes: ()=>dispatch(clearPendingRes()),
    requestResvs: (userId) =>dispatch(requestResvs(userId)),
    requestRes: (userId, resId) =>dispatch(requestRes(userId, resId)),
    // updateRes: (userId, res) => dispatch(updateRes(userId, res)),
    // deleteRes: postId => dispatch(deleteRes(postId)),
    openModal: (modal)=>dispatch(openModal(modal)),
    handleSubmit: (reservationDetails)=> dispatch(receivePendingRes(reservationDetails)),
  });
};

export default connect(msp, mdp)(ReservationMadeForm);