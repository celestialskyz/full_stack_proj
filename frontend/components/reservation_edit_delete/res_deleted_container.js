import { connect } from 'react-redux';
import {requestResvs, deleteRes} from '../../actions/reservation-actions';
import DeleteRes from './res_deleted';

const msp = (state)=>{
  let reservationdetails = state.ui.reservationdetails;
  debugger
  //  && (res.mName === reservationdetails.mName) && (res.occasion === reservationdetails.occasion) && (res.party_size === reservationdetails.party_size) && (state.session.currentUser === reservationdetails.reserver_id) && (res.show_id === reservationdetails.show_id) && (res.specialReq === reservationdetails.specialReq) && (res.time === reservationdetails.time
    
    

     return({
       reservation: Object.values(state.entities.resvs).find((res)=> {
         debugger
        return ((res.date === reservationdetails.date) && (res.inputQ === reservationdetails.inputQ) && (res.party_size === reservationdetails.party_size) && (res.time === reservationdetails.time)
        )}
          ),
      reservations: Object.values(state.entities.resvs).map((res)=> {
        let showinfo= state.entities.musicals[res.show_id];
        return (Object.assign({}, res, {mName: showinfo? showinfo.name : undefined}))} ),
       currentUser: state.session.currentUser,
  });

};
const mdp = dispatch=>{
  return(
    {requestResvs: (userId) =>dispatch(requestResvs(userId)),
    deleteRes: postId => dispatch(deleteRes(postId))
    }
  )
}

export default connect(msp, mdp)(DeleteRes);