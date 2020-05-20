import { connect } from 'react-redux';
import {fetchMusical} from '../../actions/musical_actions';
import MusicalShow from './musical_show';
import moment from 'moment';
import {receivePendingRes} from '../../actions/reservation-actions';

const msp = (state, ownProps)=>{

 // debugger
  let filterinfo= jQuery.isEmptyObject(state.ui.filters) ? 
  {inputQ:"",
     date: moment().format("YYYY-MM-DD"),
     psize: 1,
     time: 1900}  
     : state.ui.filters;
//debugger
  return({
    musical: state.entities.musicals[ownProps.match.params.musicalId],
    filters: filterinfo,
    // user: state.session.user? state.session.user : -1
  });
};
  // return({
  //    musical: state.entities.musicals[ownProps.match.params.musicalId]
     
  //  });


const mdp = (dispatch)=>{
  return({
    fetchMusical: (musicalId)=>dispatch(fetchMusical(musicalId)),
    receivePendingRes: (reservationDetails) => dispatch(receivePendingRes(reservationDetails))
  });
};

export default connect(msp, mdp)(MusicalShow);