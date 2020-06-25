import { connect } from 'react-redux';
import {requestResvs, updateRes, deleteRes} from '../../actions/reservation-actions';
import DeleteRes from './res_deleted';

const msp = (state, ownProps)=>{
  debugger
  return({    
    reservation: state.entities.resvs[ownProps.match.params.resId],
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
    updateRes: (userId, res) => dispatch(updateRes(userId, res)),
    deleteRes:  (userId, resId) => dispatch(deleteRes (userId, resId))
    }
  )
}
export default connect(msp, mdp)(DeleteRes);