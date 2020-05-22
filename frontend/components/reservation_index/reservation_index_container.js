import { connect } from 'react-redux';
import {requestResvs, updateRes, deleteRes} from '../../actions/reservation-actions';
import {fetchMusical} from '../../actions/musical_actions';
import {requestUser} from '../../actions/user_actions';
const msp = (state)=>{
  return({
     reservations: Object.values(state.entities.musicals)
  });

};
const mdp = dispatch=>{
  return(
    {requestResvs: () =>dispatch(requestResvs()),
      updateRes: (userId, res) => dispatch(updateRes(userId, res)),
      deleteRes: postId => dispatch(deleteRes(postId)),
      requestUser: (userId) => dispatch(requestUser(userId)),
      fetchMusical: musicalId => dispatch(fetchMusical(musicalId))
    }
  )
}

export default connect(msp, mdp)(ResIndex);