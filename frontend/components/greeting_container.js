import {connect} from 'react-redux';
import Greeting from './greeting';
import {logoutUser} from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import {requestUsers} from '../actions/user_actions';
import {requestResvs, updateRes, deleteRes} from '../actions/reservation-actions';
import {initialFetchMusicals} from '../actions/musical_actions';

const msp = (state) =>{
   
  return ({
      currentUser: state.session.currentUser,
      reservations: Object.values(state.entities.resvs).map((res)=> {
        let showinfo= state.entities.musicals[res.show_id];
        return (Object.assign({}, res, {mName: showinfo? showinfo.name : undefined}))} )
})};

const mdp = (dispatch) =>({
    logoutUser: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    requestUsers: ()=> dispatch(requestUsers),
    requestResvs: (userId) =>dispatch(requestResvs(userId)),
    updateRes: (userId, res) => dispatch(updateRes(userId, res)),
    deleteRes: postId => dispatch(deleteRes(postId)),
    initialFetchMusicals: () => dispatch(initialFetchMusicals()),

});


export default connect(msp,mdp)(Greeting);