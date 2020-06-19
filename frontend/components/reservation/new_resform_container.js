// import { connect } from 'react-redux';
// import ReservationMadeForm from "./res_made_form";
// import {requestResvs,updateRes, deleteRes, requestRes, clearPendingRes, receivePendingRes} from '../../actions/reservation-actions';
// import {requestUser} from '../../actions/user_actions';
// import {createRes} from '../../actions/reservation-actions';
// const msp = (state, ownProps) => {
//   debugger
//   return({
//     reserver_id: state.session.currentUserId,
//     musical: state.entities.musicals[ownProps.match.params.musicalId],
//     reservation: state.entities.resvs[ownProps.match.params.resId],
//     kclass: "editp"
//   });
// };

// const mdp = dispatch=>{
  
//   return({
//     fetchMusical: (musicalId)=>dispatch(fetchMusical(musicalId)),
//     handleSubmit: (reservationDetails) => dispatch(receivePendingRes(reservationDetails)),
//     requestRes:(userId, resId)  => dispatch(requestRes(userId, resId)),
//     submitEvent: (resId, res) => dispatch(updateRes(resId, res)), //update
//     openModal: (modal)=>dispatch(openModal(modal))
//   });
// };

// export default connect(msp, mdp)(ReservationMadeForm);