import { connect } from 'react-redux';
import ReservationShow from './reservation_show';
import { requestRes, clearPendingRes, receivePendingRes} from '../../actions/reservation-actions';
import {openModal} from '../../actions/modal_actions';
import {fetchMusical} from '../../actions/musical_actions';

const msp = (state, ownProps) =>{
  debugger
  return({
    reservation: state.entities.resvs[ownProps.match.params.resId],
    reserver_id: state.session.currentUser? state.session.currentUser : {},    currentUser: state.session.currentUser.first_name,
    musical: state.entities.musicals[ownProps.match.params.musicalId]
  });
};

const mdp = dispatch=>{
  return({
    clearPendingRes: ()=> dispatch(clearPendingRes()),
    handleSubmit: (reservationDetails) => dispatch(receivePendingRes(reservationDetails)),
    requestRes:(userId, resId)  => dispatch(requestRes(userId, resId)),
    fetchMusical: musicalId => dispatch(fetchMusical(musicalId)),
    openModal: (action)=>dispatch(openModal(action)),
    updateRes: (userId, res) => dispatch(updateRes(userId, res)),
    deleteRes: postId => dispatch(deleteRes(postId))
  });

};

export default connect(msp,mdp)(ReservationShow);