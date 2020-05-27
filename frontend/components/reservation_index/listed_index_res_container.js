import { connect } from 'react-redux';
import {requestResvs, updateRes, deleteRes} from '../../actions/reservation-actions';
import {fetchMusical} from '../../actions/musical_actions';
import {requestUser} from '../../actions/user_actions';
// import ReservationIndex from './reservation_index';
import ReservationIndexItem from './listed_index_res';

const msp = (state)=>{
  return({    
     reservation: Object.values(state.entities.resvs),
     currentUser: state.session.currentUser,
     limit: -1
    //  MusicalName: Object.values(state.entities.musicalName)
  });

};
const mdp = dispatch=>{
  return(
    {receiveRes: (res) =>dispatch(receiveRes(res)),
      fetchMusical: musicalId => dispatch(fetchMusical(musicalId)),
      // receiveIndexLimit: (limit) => dispatch(receiveIndexLimit(limit))
    }
  )
}

export default connect(msp, mdp)(ReservationIndexItem);