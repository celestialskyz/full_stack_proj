import { connect } from 'react-redux';
import {updateFilter} from '../../actions/filter_actions';
// import MusicalIndex from '../musical_index/musical_index';
// // import MusicalMap from '../musical_show/musical_map';
import MusicalSearch from './musical_search';

const msp = (state)=>{ //debugger
  return({
     musicals: Object.values(state.entities.musicals),
     inputQ: state.ui.filters.query,
     klass: state.ui.filters.query ? "search" : "home"
  });

};

const mdp = (dispatch)=>{
  return({
    updateFilter: (query)=>dispatch(updateFilter(query)),
    fetchMusicals: (filter)=>dispatch(fetchMusical(filter))
  });
};

export default connect(msp, mdp)(MusicalSearch);