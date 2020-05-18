import { connect } from 'react-redux';
import {fetchMusical} from '../../actions/musical_actions';
import MusicalShow from './musical_show';
import moment from 'moment';

const msp = (state, ownProps)=>{
 // debugger
  let filterinfo= jQuery.isEmptyObject(state.ui.filters) ? 
  {inputQ:"",
     date: moment().format("YYYY-MM-DD"),
     psize: 0,
     time: 1900}  
     : state.ui.filters;
//debugger
  return({
    musical: state.entities.musicals[ownProps.match.params.musicalId],
    filters: filterinfo,
    user: state.session.user? state.session.user : -1
  })
}
  // return({
  //    musical: state.entities.musicals[ownProps.match.params.musicalId]
     
  //  });


const mdp = (dispatch)=>{
  return({
    fetchMusical: (musicalId)=>dispatch(fetchMusical(musicalId))
  });
};

export default connect(msp, mdp)(MusicalShow);