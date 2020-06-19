// deleteRes: postId => dispatch(deleteRes(postId)),
import React from 'react';
import {updateRes, requestRes} from '../../actions/reservation-actions';
import {openModal} from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ResForm from "../reservation/new_reservation_form";

class EditReservationForm extends React.Component {
  
  componentDidMount(){
    this.props.requestRes(this.props.reserver_id, this.props.match.params.resId);
  }

  render () {
    debugger
    const { reservation, currentUserFname, currentUserEmail, submitEvent, openModal, kclass, musical} = this.props;
    if (!reservation) return null;
    return (
        <ResForm
          musical = {musical}
          filters = {this.props.reservation}
          handleSubmit = {this.props.receivePendingRes}
          reserver_id = {this.props.reserver_id}
          openModal = {this.props.openModal}
          kclass = {kclass}
        />
    );
  }
}

const msp = (state, ownProps) => {
  debugger;
   return({
    reserver_id: state.session.currentUserId,
    musical: state.entities.musicals[ownProps.match.params.musicalId],
    reservation: state.entities.resvs[ownProps.match.params.resId],
    kclass: "editp"
  })
}
// currentUserFname: state.session.currentUser.first_name,
// currentUserEmail: state.session.currentUser.email,

const mdp = dispatch => {
return({
  fetchMusical: (musicalId)=>dispatch(fetchMusical(musicalId)),
  handleSubmit: (reservationDetails) => dispatch(receivePendingRes(reservationDetails)),
  requestRes:(userId, resId)  => dispatch(requestRes(userId, resId)),
  submitEvent: (resId, res) => dispatch(updateRes(resId, res)), //update
  openModal: (modal)=>dispatch(openModal(modal))
})
}

export default connect(msp, mdp)(EditReservationForm);