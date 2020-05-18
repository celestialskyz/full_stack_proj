import { connect } from 'react-redux';
import ReservationConfirmForm from "./reservation_confirm_form";

const msp = (state, ownProps) => {
  debugger
  let filters= state.ui.filters.inputQ ? state.ui.filters : {inputQ:"",
     date: new Date(Date.now()),
     psize: 1,
     time: 1900};

  return({
    musical: state.entities.musicals[ownProps.match.params.musicalId],
    res: {
      show_id:ownProps.match.params.musicalId,
      reserver_id: state.session.currentUser.id? state.session.currentUser.id : -1,
      inputQ:state.filters.inputQ,
      date: state.filters.date,
      psize:state.filters.psize,
      time: state.filters.time
    }
  });
};

const mdp = dispatch => {
  return({
    createRes:(userId, res)=>dispatch(createRes(userId, res))
  });
  };
  
  export default connect(msp,mdp)(ReservationConfirmForm);