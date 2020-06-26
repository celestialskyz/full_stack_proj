export const fetchMusicals = (data) => {
    return(
    $.ajax({
    method: "GET",
    url: '/api/musicals',
    data
  })
  );

};

export const initialFetchMusicals = () => {
  return(
  $.ajax({
  method: "GET",
  url: '/api/musicals'
})
);

};
  
export const fetchMusical = (musicalId) => {
  // debugger
  return(
  $.ajax({
    method: "GET",
    url: `/api/musicals/${musicalId}`
  })
  );
  // debugger
};

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



export const createReview = review => (
  $.ajax({
    method: 'POST',
    url:  `/api/musicals/${musicalId}/reviews`,
    data: { review }
  })
);