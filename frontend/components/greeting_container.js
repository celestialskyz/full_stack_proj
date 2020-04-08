import {connect} from 'react-redux';
import Greeting from './greeting';
import {logoutUser} from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';

const msp = (state) =>{
    return {
      currentUser: state.entities.users[state.session.currentUserId],
      };
};

const mdp = (dispatch) =>({
    logoutUser: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});


export default connect(msp,mdp)(Greeting);