export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

import * as EventAPIUtil from '../util/review_api_util';

const receiveReviews =(reviews) =>{
  debugger
  return({
    type: RECEIVE_REVIEWS,
    reviews,
    });
};


const receiveReview =(review) => {
  return({  
    type: RECEIVE_REVIEW,
    review
    });
  };


export const createReview = (review) => dispatch =>{
  return(
    EventAPIUtil.createReview(review).then(review =>{
      dispatch(receiveReview(review));
    })
  );
};

export const fetchReviews = (musicalId) => dispatch =>{
  return(
    EventAPIUtil.fetchReviews(musicalId).then(reviews =>{
      dispatch(receiveReviews(reviews));
    })
  );
};