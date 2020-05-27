import {connect} from 'react-redux';
import Greeting from './greeting';
import {logoutUser} from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import {requestUsers} from '../actions/user_actions';
import {requestResvs, updateRes, deleteRes} from '../actions/reservation-actions';
import {fetchMusical} from '../actions/musical_actions';


const msp = (state) =>{
    debugger
    return ({
      currentUser: state.session.currentUser,
      reservations: Object.values(state.entities.resvs).map((res)=>  Object.assign({}, res, {resName: state.entities.musicals.res.showid}) )
})};

const mdp = (dispatch) =>({
    logoutUser: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    requestUsers: ()=> dispatch(requestUsers),
    fetchMusical: musicalId => dispatch(fetchMusical(musicalId)),
    requestResvs: (userId) =>dispatch(requestResvs(userId)),
    updateRes: (userId, res) => dispatch(updateRes(userId, res)),
    deleteRes: postId => dispatch(deleteRes(postId))
});


export default connect(msp,mdp)(Greeting);