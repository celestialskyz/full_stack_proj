// deleteRes: postId => dispatch(deleteRes(postId)),
import {updateRes, requestRes} from '../../actions/reservation-actions';
import {openModal} from '../../actions/modal_actions';
import { connect } from 'react-redux';

class EditReservationForm extends React.Component {

  componentDidMount(){
    this.props.requestRes(this.props.reserver_id, this.props.reservation.id);
  }

  render () {
    const { reservation, currentUserFname, currentUserEmail, submitEvent, openModal} = this.props;

    if (!reservation) return null;
    return (
      <ReservationConfirmForm
      reservation={reservation}
      currentUserFname={currentUserFname}
      currentUserEmail ={currentUserEmail}
      submitEvent={submitEvent}
      openModal ={openModal}
      />
    );
  }
}

const msp = (state, ownProps) => {
  return({
    reserver_id: state.session.currentUserId,
    currentUserFname: state.session.currentUser.first_name,
    currentUserEmail: state.session.currentUser.email,
    reservation: state.entities.resvs[ownProps.match.params.resId]
  })
}


const mdp = dispatch => {
return({
  requestRes:(userId, resId)  => dispatch(requestRes(userId, resId)),
  submitEvent: (resId, res) => dispatch(updateRes(resId, res)), //update
  openModal: (modal)=>dispatch(openModal(modal))
})
}

export default connect(msp, mdp)(EditReservationForm);