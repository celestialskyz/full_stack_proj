import { connect } from 'react-redux';
import {requestResvs, updateRes, deleteRes} from '../../actions/reservation-actions';
import {fetchMusical} from '../../actions/musical_actions';
import {requestUser} from '../../actions/user_actions';
const msp = (state)=>{
  return({
     reservations: Object.values(state.entities.resvs),
     currentUser: state.session.currentUser,
  });

};
const mdp = dispatch=>{
  return(
    {requestResvs: () =>dispatch(requestResvs()),
      updateRes: (userId, res) => dispatch(updateRes(userId, res)),
      deleteRes: postId => dispatch(deleteRes(postId)),
      fetchMusical: musicalId => dispatch(fetchMusical(musicalId))
    }
  )
}

export default connect(msp, mdp)(ResIndex);