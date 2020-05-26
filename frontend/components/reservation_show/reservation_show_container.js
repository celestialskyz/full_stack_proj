import { connect } from 'react-redux';
import ReservationShow from './reservation_show';
import { requestRes } from '../../actions/reservation-actions';
import {openModal} from '../../actions/modal_actions';
import {fetchMusical} from '../../actions/musical_actions';
const msp = (state, ownProps) =>{
  
  return({
    reservation: state.entities.musicals[ownProps.match.params.resId],
    reserver_id: state.session.currentUserId,
    currentUserFname: state.session.currentUser.first_name,
    musical: state.entities.musicals[ownProps.match.params.musicalId]
  });
};

const mdp = dispatch=>{
  return({
    requestRes:(userId, resId)  => dispatch(requestRes(userId, resId)),
    fetchMusical: musicalId => dispatch(fetchMusical(musicalId)),
    openModal: (action)=>dispatch(openModal(action)),
    updateRes: (userId, res) => dispatch(updateRes(userId, res)),
    deleteRes: postId => dispatch(deleteRes(postId))
  });

};

export default connect(msp,mdp)(ReservationShow);