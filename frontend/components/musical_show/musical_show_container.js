import { connect } from 'react-redux';
import {fetchMusical} from '../../actions/musical_actions';
import MusicalShow from './musical_show';

const msp = (state, ownProps)=>{
  return({
     musical: state.entities.musicals[ownProps.match.params.musicalId]
     
  });
};

const mdp = (dispatch)=>{
  return({
    fetchMusical: (musicalId)=>dispatch(fetchMusical(musicalId))
  });
};

export default connect(msp, mdp)(MusicalShow);