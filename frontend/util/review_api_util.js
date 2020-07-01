
export const fetchReviews = (musicalId) => {
  // debugger
  return(
  $.ajax({
    method: "GET",
    url: `/api/musicals/${musicalId}/reviews`
  })
  );
  // debugger
};


export const createReview = (review, musicalId) => (
  $.ajax({
    method: 'POST',
    url:  `/api/musicals/${musicalId}/reviews`,
    data: { review }
  })
);