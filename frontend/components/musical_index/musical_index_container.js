import { connect } from 'react-redux';
import {fetchMusicals} from '../../actions/musical_actions';
import MusicalIndex from './musical_index';

const msp = (state)=>{
  return({
     musicals: Object.values(state.entities.musicals)

  });

};

const mdp = (dispatch)=>{
  return({
    fetchMusicals: ()=>dispatch(fetchMusicals())
  });
};

export default connect(msp, mdp)(MusicalIndex);