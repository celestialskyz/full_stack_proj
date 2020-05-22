import { connect } from 'react-redux';
import ReservationMadeForm from "./res_made_form";
import {requestResvs,updateRes, deleteRes} from '../../actions/reservation-actions';
import {requestUser} from '../../actions/user_actions';
import {createRes} from '../../actions/reservation-actions';
const msp = (state, ownProps) => {
  return({
    reserver_id: state.session.currentUserId,
    currentUserFname: state.session.currentUser.first_name,
    res: state.ui.reservationdetails
  });
};

const mdp = dispatch=>{
  return({
    requestResvs: () =>dispatch(requestResvs()),
    updateRes: (userId, res) => dispatch(updateRes(userId, res)),
    deleteRes: postId => dispatch(deleteRes(postId)),
    requestUser: (userId) => dispatch(requestUser(userId)),
    fetchMusical: musicalId => dispatch(fetchMusical(musicalId))
  });

};

export default connect(msp, mdp)(ReservationMadeForm);