import  {RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';
const reviewsReducer = (state={}, action) =>{
  const oldState = Object.freeze(state);
  
  switch(action.type){
    case RECEIVE_REVIEWS:      
      return Object.assign({}, action.reviews);
    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      const newState = merge({}, state);
      newState[review.bench_id].reviewIds.push(review.id);
      newState[review.bench_id].average_rating = average_rating;
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;