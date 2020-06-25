import { connect } from 'react-redux';
import {requestResvs, deleteRes} from '../../actions/reservation-actions';
import DeleteRes from './res_deleted';

const msp = (state, ownProps)=>{
  let reservationdetails = state.ui.reservationdetails;
  let individualres = Object.values(state.entities.resvs).filter((res)=>{if ((res.date == reservationdetails.date) && (res.time === reservationdetails.time) && (res.party_size === reservationdetails.party_size)) return res});
  let last = individualres.length-1; 
  debugger
  //  && (res.mName === reservationdetails.mName) && (res.occasion === reservationdetails.occasion) && (res.party_size === reservationdetails.party_size) && (state.session.currentUser === reservationdetails.reserver_id) && (res.show_id === reservationdetails.show_id) && (res.specialReq === reservationdetails.specialReq) && (res.time === reservationdetails.time
     return({
      //  reservation:Object.values(state.entities.resvs).filter((res)=>{if ((res.date == reservationdetails.date) && (res.time === reservationdetails.time) && (res.party_size === reservationdetails.party_size)) return res}),
      reservation:individualres[last],
      musical: state.entities.musicals[ownProps.match.params.musicalId],
       reservations: Object.values(state.entities.resvs).map((res)=> {
        let showinfo= state.entities.musicals[res.show_id];
        return (Object.assign({}, res, {mName: showinfo? showinfo.name : undefined}))} ),
      currentUser: state.session.currentUser,
  });

};
const mdp = dispatch=>{
  return(
    {requestResvs: (userId) =>dispatch(requestResvs(userId)),
      fetchMusicals: musicalId => dispatch(fetchMusicals(musicalId)),
      deleteRes:  (userId, resId) => dispatch(deleteRes (userId, resId))
    }
  )
}

export default connect(msp, mdp)(DeleteRes);