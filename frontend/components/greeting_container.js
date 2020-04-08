import {connect} from 'react-redux';
import Greeting from './greeting';
import {logoutUser} from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import {requestUsers} from '../actions/user_actions';
const msp = (state) =>({
      currentUser: state.session.currentUser
});

const mdp = (dispatch) =>({
    logoutUser: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    requestUsers: ()=> dispatch(requestUsers)
});


export default connect(msp,mdp)(Greeting);