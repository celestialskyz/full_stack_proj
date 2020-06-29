import { connect } from 'react-redux';

import { createReview } from '../../actions/musical_actions';
import ReviewForm from './review_create';
const msp = (state, ownProps)=>{
  
  return ({
    musical: state.entities.musicals[ownProps.match.params.musicalId],
    currentUser: state.session.currentUser
  }) ;
};

const mdp = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  fetchMusicals: musicalId => dispatch(fetchMusicals(musicalId)),

});

export default connect(msp, mdp)(ReviewForm);
