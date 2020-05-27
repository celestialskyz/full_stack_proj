import { connect } from 'react-redux';
import {requestResvs, updateRes, deleteRes} from '../../actions/reservation-actions';
// import {fetchMusical} from '../../actions/musical_actions';
import {fetchMusical} from '../../util/musical_api_util';
import {requestUser} from '../../actions/user_actions';
import ReservationIndex from './reservation_index';

const msp = (state)=>{
  debugger
  return({    
     reservations: Object.values(state.entities.resvs).map((res)=>  Object.assign({}, res, {resName: state.entities.musicals.res.showid}) ),
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