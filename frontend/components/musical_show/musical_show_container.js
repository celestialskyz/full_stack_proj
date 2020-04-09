import { connect } from 'react-redux';
import {fetchMusical} from '../../actions/musical_actions';


const msp = (state)=>{
  return({
     musical: state.musical
  });

};

const mdp = (dispatch)=>{
  return({
    fetchMusical: ()=>dispatch(fetchMusical())
  });
};

export default connect(msp, mdp)(MusicalShow);