import { connect } from 'react-redux';
import {fetchMusical, createReview} from '../../actions/musical_actions';
import MusicalShow from './musical_show';
import moment from 'moment';
import {receivePendingRes} from '../../actions/reservation-actions';
import {openModal} from '../../actions/modal_actions';

const msp = (state, ownProps)=>{
  
  let filterinfo= jQuery.isEmptyObject(state.ui.filters) ? 
  {inputQ:"",
     date: moment().format("yyyy-MM-DD"),
     party_size: 2,
     time: 1900}  
     : state.ui.filters;
  
  return({
    musical: state.entities.musicals[ownProps.match.params.musicalId],
    filters: filterinfo,
    reserver_id: state.session.currentUser? state.session.currentUser : {},
    kclass: "showp"
  });
};
  // return({
  //    musical: state.entities.musicals[ownProps.match.params.musicalId]
     
  //  });


const mdp = (dispatch)=>{
  return({
    fetchMusical: (musicalId)=>dispatch(fetchMusical(musicalId)),
    handleSubmit: (reservationDetails) => dispatch(receivePendingRes(reservationDetails)),
    openModal: (modal)=>dispatch(openModal(modal)),
    createReview: review =>dispatch(createReview(review))
  });
};

export default connect(msp, mdp)(MusicalShow);