import { connect } from 'react-redux';

import { createReview } from '../../actions/bench_actions.js';
import ReviewForm from './review_create';
const msp = (state, ownProps)=>{
  return ({
    musical: state.entities.musicals[ownProps.match.params.musicalId]
  }) ;
};

const mdp = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(msp, mdp)(ReviewForm);
