import { connect } from 'react-redux';
import {fetchMusical} from '../../actions/musical_actions';
import MusicalShow from './musical_show';
import moment from 'moment';
import {receivePendingRes} from '../../actions/reservation-actions';
import {openModal} from '../../actions/modal_actions';

const msp = (state, ownProps)=>{
 // debugger
  let filterinfo= jQuery.isEmptyObject(state.ui.filters) ? 
  {inputQ:"",
     date: moment().format("yyyy-MM-DD"),
     party_size: 2,
     time: 1900}  
     : state.ui.filters;
// debugger
  return({
    musical: state.entities.musicals[ownProps.match.params.musicalId],
    filters: filterinfo,
    reserver_id: state.session.currentUser? state.session.currentUser : {}
  });
};
  // return({
  //    musical: state.entities.musicals[ownProps.match.params.musicalId]
     
  //  });


const mdp = (dispatch)=>{
  return({
    fetchMusical: (musicalId)=>dispatch(fetchMusical(musicalId)),
    receivePendingRes: (reservationDetails) => dispatch(receivePendingRes(reservationDetails)),
    openModal: (modal)=>dispatch(openModal(modal))
  });
};

export default connect(msp, mdp)(MusicalShow);