import { connect } from 'react-redux';
import {requestResvs, updateRes, deleteRes} from '../../actions/reservation-actions';
import {fetchMusical} from '../../actions/musical_actions';
import {requestUser} from '../../actions/user_actions';
import ReservationIndex from './reservation_index';

const msp = (state)=>{
  debugger
  return({    
     reservations: Object.values(state.entities.resvs),
     currentUser: state.session.currentUser,
     limit: -1
    //  MusicalName: Object.values(state.entities.musicalName)
  });

};
const mdp = dispatch=>{
  return(
    {requestResvs: (userId) =>dispatch(requestResvs(userId)),
      fetchMusical: musicalId => dispatch(fetchMusical(musicalId)),
      // receiveIndexLimit: (limit) => dispatch(receiveIndexLimit(limit))
    }
  )
}

export default connect(msp, mdp)(ReservationIndex);