import { connect } from 'react-redux';
import {requestResvs, updateRes, deleteRes} from '../../actions/reservation-actions';
// import {fetchMusical} from '../../actions/musical_actions';
import {fetchMusical} from '../../util/musical_api_util';
import {requestUser} from '../../actions/user_actions';
import ReservationIndex from './reservation_index';

const msp = (state)=>{
  return({    
    //  reservations: Object.values(state.entities.resvs).map((res)=>  Object.assign({}, res, {mName: state.entities.musicals[res.show_id].name}) ),
    reservations: Object.values(state.entities.resvs).map((res)=> {
      let showinfo= state.entities.musicals[res.show_id];
      return (Object.assign({}, res, {mName: showinfo? showinfo.name : undefined}))} ),
    
    currentUser: state.session.currentUser,
     limit: -1
  });

};
const mdp = dispatch=>{
  return(
    {requestResvs: (userId) =>dispatch(requestResvs(userId)),
    updateRes: (userId, res) => dispatch(updateRes(userId, res)),
    deleteRes:  (userId, resId) => dispatch(deleteRes (userId, resId))
    }
  )
}

export default connect(msp, mdp)(ReservationIndex);