// import { connect } from 'react-redux';
// import {requestResvs, deleteRes} from '../../actions/reservation-actions';
// import ResIndex from './reservation_index';
// import {fetchMusical} from '../../actions/musical_actions';

// const msp = (state, ownProps) =>{
//   return({
//     resvs:Object.values(state.entities.resvs),
//     userId: state.session.currentUser.id,
//     userN: state.session.currentUser.name,
//     musicals: state.entities.musicals
//   });
// };

// const mdp = dispatch =>{
//   return(
//     {
//       fetchMusical: (musicalId)=>dispatch(fetchMusical(musicalId)),
//       requestResvs:(userId) =>dispatch(requestResvs(userId)),
//       deleteRes: (userId, resId)=>dispatch(deleteRes(userId, resId))

//     });
// };

// export default connect(msp, mdp)(ResIndex);