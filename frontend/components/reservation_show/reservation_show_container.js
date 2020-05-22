import { connect } from 'react-redux';
import ReservationShow from './reservation_show';
import { requestRes } from '../../actions/reservation-actions';
import {openModal} from '../../actions/modal_actions';

const msp = (state, ownProps) =>{
  return({
    reservation: state.entities.musicals[ownProps.match.params.resId],
    reserver_id: state.session.currentUserId,
    currentUserFname: state.session.currentUser.first_name
  });
};

const mdp = dispatch=>{
  return({
    requestRes: (resId)=>dispatch(requestRes(resId)),
    fetchMusical: musicalId => dispatch(fetchMusical(musicalId)),
    openModal: (action)=>dispatch(openModal(action))
  });

};

export default connect(msp,mdp)(ReservationShow);